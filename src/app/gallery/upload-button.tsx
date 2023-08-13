"use client"
import { CldUploadButton } from 'next-cloudinary';
import { UploadIcon } from '../components/icons/GalleryPageIcons';
import { useRouter } from 'next/navigation';

export default function UploadButton() {
    const router = useRouter();

    return (
        <CldUploadButton
            className="btn btn-accent text-black"
            uploadPreset="ila56eob"
            onUpload={() => {
                setTimeout(() => {
                    router.refresh();
                }, 1000)
            }}
        >
            <UploadIcon />
            Upload
        </CldUploadButton>
    );
}
