import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";

export type SearchResult = {
    public_id: string,
    tags: string[],
}

export default async function GalleryPage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(30)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <div className="flex flex-col gap-8 p-4">
                <div className="flex justify-between mt-4">
                    <h1 className="text-4xl font-bold text-white">Gallery</h1>
                    <UploadButton />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result) => (
                        <CloudinaryImage
                            key={result.public_id}
                            image_data={result}
                            width="400"
                            height="300"
                            sizes="100vw"
                            alt="Description of my image"
                            path="/gallery"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}