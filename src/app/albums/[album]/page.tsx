import { SearchResult } from '@/app/gallery/page';
import AlbumGrid from '../album-grid';
import cloudinary from 'cloudinary';
import ForceRefresh from '@/app/components/force-refresh';

export default async function AlbumPage({
    params: { album }
}: {
    params: { album: string };
}) {

    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${album}`)
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(30)
        .execute()) as { resources: SearchResult[] }

    return (
        <section>
            <ForceRefresh />

            <div className="flex flex-col gap-8 p-4">
                <div className="flex justify-between mt-4">
                    <h1 className="text-4xl font-bold text-white">
                        Album: <span className="capitalize">{album}</span>
                    </h1>
                </div>

                <AlbumGrid images={results.resources} />
            </div>
        </section>
    );
}
