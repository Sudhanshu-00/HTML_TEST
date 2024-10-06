import React from 'react';

const ContentSection = () => {
    return (
        <div>
            <div className='justify-center'>
                <h1 className="text-2xl font-bold mb-4">Have you ever posted any photo on social media?</h1>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex md:flex-row items-center p-2 w-screen">
                <div className="md:w-1/2">
                    <div>
                        <h2 className="text-2xl font-semibold text-left p-5">Sed ut perspiciatis</h2>
                        <p className="text-gray-700 text-left px-5">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-left p-5">Sed ut perspiciatis</h2>
                        <p className="text-gray-700 text-left px-5">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-left p-5">Lorem ipsum dolor</h2>
                        <p className="text-gray-700 text-left px-5">
                            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div >
                <div className="md:w-1/2 p-4">
                    <img src="https://s3-alpha-sig.figma.com/img/a176/1b0f/cca829be2ec39306f4a3d85d585418f9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-wu9q1h6Mb-IbTuY28jiuI8ALMrqxrZ3pAOfZnbGRVaLciLzI0TXToCpfqipsxJZHc0Y2B9VKmdKIG8vMpRifVGU9j2Gd2MAoqonBSs-ACWS6Xi~1A1uq2EFIMIG84R1mkKvUhnt5JgQx34aTAG~uPHEXulI9aktmXPGbgpCu4COoxYWrolYPCn3MLhwuhYRavbS4jMY1oB7EvOGFSremK1WmjxIPrs2sZev-TgRxNRjb7dIRTkIFR7cWBM9kLm-LB-xRYgpCt84iOoIeIs078JqW8UHvVNS1F22jUIHKYiVKmBJwKLyXRy3w1FBSb51wR2KGhlKykrlKTM5ycwfQ__" alt="Tall buildings" className="w-full h-auto rounded shadow" />
                </div>
            </div >
        </div>
    );
};

export default ContentSection;
