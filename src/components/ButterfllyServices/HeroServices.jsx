import React from 'react';

const HeroServices = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/58aa/618b/ac1a68320c475218ca3159a5d121ba22?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFQKHCwlMlBMaVL-FAZwBb~Y2ZqVsGLWxrRAdBPIWvJSRB3ApcXH73B7rc8Voo57mv9yQ2zm9Xd-l4huov-2e9r1PqeETWQ5fSR2XGFtFOd8K4Rur9eucgjdgpTKVwviiNQXC9jfplhJAi~IOF5yzWI82RB2AqYN4nx-0zhaqdrV3XiSClVzNVK62YnTqAPA9Afnj5gzxK7difttDwaJ9-Elb2mngE8miNe8vaXL6Sh3E8Jq14ZElLCewbWzC2UHfPYCD7FyQmXdy1~RL6J4Fz8QPm~nutehrkhRhoNMRKLelY6KQuZC03fr~ZZFmk68lzsgT7GWifN6hkUGHVbOaQ__")',
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-4">
                        "Comprehensive solutions"
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        Web development, database management, API integration,
                        tailored to meet business goals!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroServices;
