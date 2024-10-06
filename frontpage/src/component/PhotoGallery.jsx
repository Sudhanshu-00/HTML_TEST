import React from 'react';

const PhotoGallery = () => {
    return (
        <div className="container mx-auto p-4 w-screen">
            <h1 className="text-2xl font-bold mb-4">Make your photos more stylish</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex pt-1 space-x-11">
                <div className="w-1/3 border-2 h-1/2 p-0">
                    <img src="https://s3-alpha-sig.figma.com/img/f027/ad3e/88d92a29093d425399c0373d28f59fe7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~F3eOnnvjh1u--QhGVeTrxysjI~9JZ7Hb9hDR7BaI9xWAXoKtfcxJxEqiXPqE4bMpkcesqrbl2TN3NHcdLOidQaYtc~pDcFL3RgmLUFYVFEMlq5ijN1oc5tLLrUFNOVDKECJOp57TbQUyAN37x8oYd94ZmkEJWYu-FMHQK5lcHh-Dg3DWWF6PIVTkEv~gw~fS2W1hhOCxP-RYdKAliw7XKrQN8RksJJkgexu4bHZkZq9Tx~rnaVCUrHP20-DxooWmhv4DTonGf2Lp4XFVORuIkhWrx6dgvef3hcwUd1bY8cRSODqnDCBoi0heE6PEayi8Zm33vlGdgp-HINTtafpw__" alt="Sed ut perspiciatis" className="mb-2 rounded shadow" />
                    <p className="text-center text-2xl font-bold ">Sed ut perspiciatis</p>
                    <p className="mb-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="w-1/3 border-2 h-1/2 p-0">
                    <img src="https://s3-alpha-sig.figma.com/img/509b/2f7a/af199b94148f7bba6aa717e04de0ed97?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCol5APE0140To661cxmYDHPqRkpBuSoPh5vvv9HSZc2Jg4RH5kyF0GUOSDmCcFWdPUslNI9gojn2NKqeeMac6ab9a~05MGuiVJalM42f9A1Hn8-Ns7om1dfT1WIioHFR2~zwcBMEomT9t8b98l7FwNl1ZPPcl-b~P3QACUAius65vhKEkm3Aj4o93bWL79lXlkRkeHpml1pYPLexdsj~~CPBz0mlre3hbqX1kY7wsEOZvleXcQvExO7uVBv3CQSC9z~uCtQH57OCrFNEj7V8vq7RjceRQj7s-~UQKKQXi53YpcQq7NkGHRaVMMph5IhIZHrSauY1an6udftT1ddZg__" alt="Lorem ipsum dolor" className="mb-2 rounded shadow" />
                    <p className="text-center text-2xl font-bold ">Lorem ipsum dolor</p>
                    <p className="mb-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="w-1/3 border-2 h-1/2 p-0">
                    <img src="https://s3-alpha-sig.figma.com/img/be68/bf70/ecadfa1e925cc59d5e7bc0f2589560c7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdkklFBoeTYkC3uKco4rQK8P73bhpchooXmjciA2Y9FTk0Hx1uUZZ7Gwfo5spo4aKmCo~xOKdGs3mUj-tfnY22tzZReJ2v0zroPho-4~VcEuKqASz0DgdoXlwc8WSE2nw9U5GO3r1yOhSFhBOIq6nE182HOrC2DNAzKSZyoafV5l00nUf8WO8vD~FTbp3DJbt1Zmim~uopyi50GXlxiz0kjXFN4HPi~JcGJpfncZHXCFqAtmVJgMikStmA1iLJV~bkJoef0zKeJ7b2xAHZPRQRNg8QBUQITl6-F94Quik3culK6nwYwZ~xE~XBwCdA9fGGGFy162~ac3Vg-QfFc9Iw__" alt="Nemo enim ipsam" className="mb-2 rounded shadow" />
                    <p className="text-center text-2xl font-bold ">Nemo enim ipsam</p>
                    <p className="mb-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
