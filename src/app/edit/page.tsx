"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
    searchParams: { publicId },
}: {
    searchParams: { publicId: string };
}) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
    >();

    return (
        <section>
            <div className="flex flex-col gap-8 p-4">
                <div className="flex justify-between mt-4">
                    <h1 className="text-4xl font-bold text-white">Edit: </h1>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button className="btn btn-primary" onClick={() => setTransformation("generative-fill")}>
                        Apply Generative Fill
                    </button>

                    <button className="btn btn-secondary" onClick={() => setTransformation("blur")}>
                        Apply Blur
                    </button>

                    <button className="btn btn-accent" onClick={() => setTransformation("grayscale")}>
                        Apply GrayScale
                    </button>

                    <button className="btn btn-info" onClick={() => setTransformation("pixelate")}>
                        Apply Pixelate
                    </button>

                    <button className="btn" onClick={() => setTransformation(undefined)}>
                        Clear All
                    </button>
                </div>

                <div className="flex flex-col items-center md:grid grid-cols-2 gap-12">
                    <CldImage src={publicId} width="300" height="200" alt="" />

                    {transformation === "generative-fill" && (
                        <CldImage
                            src={publicId}
                            width="300"
                            height="200"
                            alt=""
                            crop="pad"
                            fillBackground
                        />
                    )}

                    {transformation === "blur" && (
                        <CldImage
                            src={publicId}
                            width="300"
                            height="200"
                            alt=""
                            blur="800"
                        />
                    )}

                    {transformation === "grayscale" && (
                        <CldImage
                            src={publicId}
                            width="300"
                            height="200"
                            alt=""
                            grayscale
                        />
                    )}

                    {transformation === "pixelate" && (
                        <CldImage
                            src={publicId}
                            width="300"
                            height="200"
                            alt=""
                            pixelate
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
