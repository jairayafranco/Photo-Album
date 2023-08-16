import { SearchResult } from "../gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export default function ImageGrid(
    { images, getImage }: { images: SearchResult[], getImage: (imageData: SearchResult) => ReactNode }
) {
    function getColumns(colIndex: number) {
        return images.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
    }

    return (
        <div className="flex flex-col md:grid grid-cols-4 gap-4">
            {
                [getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                        {column.map(getImage)}
                    </div>
                ))
            }
        </div>
    )
}