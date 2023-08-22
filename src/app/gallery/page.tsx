import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "../components/cloudinary-image";
import ImageGrid from "../components/image-grid";
import SearchForm from "./search-form";

export type SearchResult = {
    public_id: string,
    tags: string[],
}

export default async function GalleryPage({
    searchParams: { search },
}: {
    searchParams: { search: string };
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image ${search ? `AND tags=${search}` : ""}`)
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

                <SearchForm initialSearch={search} />

                {results.resources.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-96">
                        <h1 className="text-4xl font-bold text-white">No images yet</h1>
                        <p className="text-white">Upload an image to get started</p>
                    </div>
                )}

                <ImageGrid
                    images={results.resources}
                    getImage={(imageData) => {
                        return (
                            <CloudinaryImage
                                key={imageData.public_id}
                                image_data={imageData}
                                width="400"
                                height="300"
                                sizes="100vw"
                                alt="Description of my image"
                            />
                        )
                    }}
                />
            </div>
        </section>
    );
}
