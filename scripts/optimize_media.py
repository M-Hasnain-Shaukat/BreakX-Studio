import os
import sys
import time
import shutil
import subprocess
from PIL import Image

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

FFMPEG = r'C:\Users\Doctor Computers\AppData\Local\Programs\Python\Python312\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')

def safe_replace(src, dst, max_retries=5):
    for i in range(max_retries):
        try:
            if os.path.exists(dst):
                os.remove(dst)
            os.rename(src, dst)
            return True
        except Exception as e:
            time.sleep(0.6)
    try:
        shutil.copy2(src, dst)
        os.remove(src)
        return True
    except Exception as e:
        print(f"    Failed to replace {dst}: {e}")
        return False

def format_size(bytes_val):
    if bytes_val < 1024:
        return f"{bytes_val} B"
    elif bytes_val < 1024 * 1024:
        return f"{bytes_val / 1024:.1f} KB"
    else:
        return f"{bytes_val / (1024 * 1024):.2f} MB"

def optimize_videos():
    print("\n=======================================================")
    print(" 1. OPTIMIZING PORTFOLIO MP4 VIDEOS (H.264 CRF 23 +faststart)")
    print("=======================================================")
    videos_dir = os.path.join(PUBLIC_DIR, 'videos')
    total_before = 0
    total_after = 0

    for f in sorted(os.listdir(videos_dir)):
        if not f.endswith('.mp4') or f.endswith('-temp.mp4') or f.endswith('-test.mp4'):
            continue
        src = os.path.join(videos_dir, f)
        temp_out = os.path.join(videos_dir, f"{os.path.splitext(f)[0]}-temp.mp4")
        
        before_size = os.path.getsize(src)
        total_before += before_size

        cmd = [
            FFMPEG, '-y',
            '-i', src,
            '-c:v', 'libx264',
            '-crf', '23',
            '-preset', 'veryfast',
            '-pix_fmt', 'yuv420p',
            '-movflags', '+faststart',
            '-c:a', 'aac',
            '-b:a', '96k',
            temp_out
        ]
        
        proc = subprocess.run(cmd, capture_output=True, text=True, errors='ignore')
        if proc.returncode == 0 and os.path.exists(temp_out) and os.path.getsize(temp_out) > 0:
            after_size = os.path.getsize(temp_out)
            if after_size < before_size:
                if safe_replace(temp_out, src):
                    total_after += after_size
                    savings = (1 - after_size / before_size) * 100
                    print(f"  [OK] {f}: {format_size(before_size)} -> {format_size(after_size)} (-{savings:.1f}%)")
                else:
                    total_after += before_size
            else:
                os.remove(temp_out)
                total_after += before_size
                print(f"  [--] {f}: Already optimal ({format_size(before_size)})")
        else:
            if os.path.exists(temp_out):
                os.remove(temp_out)
            total_after += before_size
            print(f"  [FAIL] {f}: ffmpeg error")

    pct = (1 - total_after/total_before)*100 if total_before else 0
    print(f"\n=> Video Bandwidth: {format_size(total_before)} -> {format_size(total_after)} (-{pct:.1f}% reduction)")
    return total_before, total_after

def optimize_images():
    print("\n=======================================================")
    print(" 2. OPTIMIZING PREVIEW POSTERS (Progressive JPEG Q=84)")
    print("=======================================================")
    previews_dir = os.path.join(PUBLIC_DIR, 'previews')
    total_before = 0
    total_after = 0

    for f in sorted(os.listdir(previews_dir)):
        if not (f.endswith('.jpg') or f.endswith('.jpeg')):
            continue
        src = os.path.join(previews_dir, f)
        before_size = os.path.getsize(src)
        total_before += before_size

        temp_out = os.path.join(previews_dir, f"{os.path.splitext(f)[0]}-temp.jpg")
        try:
            with Image.open(src) as img:
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                img.save(temp_out, 'JPEG', quality=84, optimize=True, progressive=True)
            
            after_size = os.path.getsize(temp_out)
            if after_size < before_size:
                if safe_replace(temp_out, src):
                    total_after += after_size
                    savings = (1 - after_size / before_size) * 100
                    print(f"  [OK] {f}: {format_size(before_size)} -> {format_size(after_size)} (-{savings:.1f}%)")
                else:
                    total_after += before_size
            else:
                os.remove(temp_out)
                total_after += before_size
                print(f"  [--] {f}: Already optimal ({format_size(before_size)})")
        except Exception as e:
            if os.path.exists(temp_out):
                os.remove(temp_out)
            total_after += before_size
            print(f"  [FAIL] {f}: Error {e}")

    pct = (1 - total_after/total_before)*100 if total_before else 0
    print(f"\n=> Previews Bandwidth: {format_size(total_before)} -> {format_size(total_after)} (-{pct:.1f}% reduction)")
    return total_before, total_after

def optimize_textures():
    print("\n=======================================================")
    print(" 3. OPTIMIZING TEXTURES & LOGOS")
    print("=======================================================")
    texture_path = os.path.join(PUBLIC_DIR, 'textures', 'brushed-metal.webp')
    if os.path.exists(texture_path):
        before = os.path.getsize(texture_path)
        temp_out = os.path.join(PUBLIC_DIR, 'textures', 'brushed-metal-temp.webp')
        with Image.open(texture_path) as img:
            img.save(temp_out, 'WEBP', quality=85, method=6)
        after = os.path.getsize(temp_out)
        if after < before:
            safe_replace(temp_out, texture_path)
            print(f"  [OK] brushed-metal.webp: {format_size(before)} -> {format_size(after)} (-{(1-after/before)*100:.1f}%)")
        else:
            os.remove(temp_out)

    unused_jpg = os.path.join(PUBLIC_DIR, 'textures', 'brushed-metal.jpg')
    if os.path.exists(unused_jpg):
        sz = os.path.getsize(unused_jpg)
        os.remove(unused_jpg)
        print(f"  [OK] Removed unused brushed-metal.jpg ({format_size(sz)} saved)")

    for name in ['breakx-logo.png', 'logo.png']:
        path = os.path.join(PUBLIC_DIR, name)
        if os.path.exists(path):
            before = os.path.getsize(path)
            temp_out = os.path.join(PUBLIC_DIR, f"temp_{name}")
            with Image.open(path) as img:
                img.save(temp_out, 'PNG', optimize=True)
            after = os.path.getsize(temp_out)
            if after < before:
                safe_replace(temp_out, path)
                print(f"  [OK] {name}: {format_size(before)} -> {format_size(after)} (-{(1-after/before)*100:.1f}%)")
            else:
                if os.path.exists(temp_out):
                    os.remove(temp_out)

def handle_verification_folder():
    print("\n=======================================================")
    print(" 4. REMOVING INTERNAL DEV SCREENSHOTS FROM DEPLOY BUNDLE")
    print("=======================================================")
    pub_verif = os.path.join(PUBLIC_DIR, 'verification')
    root_verif = os.path.join(ROOT_DIR, 'verification')
    if os.path.exists(pub_verif):
        verif_size = sum(os.path.getsize(os.path.join(pub_verif, f)) for f in os.listdir(pub_verif) if os.path.isfile(os.path.join(pub_verif, f)))
        if os.path.exists(root_verif):
            shutil.rmtree(root_verif)
        shutil.move(pub_verif, root_verif)
        print(f"  [OK] Moved public/verification -> /verification ({format_size(verif_size)} removed from web bundle)")

def main():
    test_mp4 = os.path.join(PUBLIC_DIR, 'videos', 'bun-n-blaze-test.mp4')
    if os.path.exists(test_mp4):
        os.remove(test_mp4)

    optimize_videos()
    optimize_images()
    optimize_textures()
    handle_verification_folder()
    print("\nMedia optimization complete!\n")

if __name__ == '__main__':
    main()
