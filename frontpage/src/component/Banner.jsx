import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center w-screen h-screen " style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/9a0f/235b/083f8069df6b70482aa1c27088a8f0c5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1M4e5sxyReAK1RY9mjaJ4fhjVTnDdY8pytKxRv23EuaAO6xQgTQ1PENFVJFDUuHuN9TnDtMRGZwQ9DZTCPP572BuiLX5GfLkjGnDVsEyn5X~sJPXWP4SfMkllIaHuu1NkXtJ~tJ2p17UXW7A4jtkDf-RrsNuC3QWYBY8z4b8YQpEUhjQuZGzlHYyQJlMhtq425L8Nru~w7PDnOIrXFNLglRKIqx46FREPKE1dzGb2C~IOodRdEHudyqD5varhvUt~Ll0bsknwyFtoMnjwRkj~P93AAvdHXceVFF4JUdzyM7-IoqQW5egmO~KB7fB48a4eZsfBuj7SYwLLHNvJaByQ__')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-3xl font-bold">The largest community of photo enthusiasts</h1>
                <button className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-400">Join Today</button>
            </div>
        </div>
    );
};

export default Banner;
