import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xbd7F5cDa9AD5d953Fa7A35f6d87591c23BEBbCba",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Monkey Avatar",
                description: "This NFT will give you access to AstroDAO!",
                image: readFileSync("scripts/assets/astroavatar.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()