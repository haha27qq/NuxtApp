<template>
    <div>
        <NuxtLayout>
            <div
                class="flex max-w-[1240px] items-center justify-around pt-[150px] font-ship sm:flex-col sm:gap-[45px]"
            >
                <img
                    src="../assets/images/profile.png"
                    alt=""
                    class="photo h-auto w-[20%] sm:w-[30%]"
                />
                <div
                    class="about right flex w-[50%] flex-wrap items-center py-[80px] sm:justify-center"
                >
                    <img
                        src="../assets/images/boy.png"
                        alt=""
                        class="h-auto w-[50px]"
                    />
                    <div class="name p-[8px] text-[20px]">周義興 (Eric)</div>
                    <div class="w-[100%]"></div>
                    <font-awesome-icon
                        icon="school"
                        class="p-[8px] text-[30px]"
                    />
                    <div class="p-[8px] text-[20px]">
                        國立成功大學(NCKU) / 統計學系
                    </div>
                    <div class="w-[100%]"></div>
                    <font-awesome-icon
                        icon="envelope"
                        class="p-[8px] text-[30px]"
                    />
                    <div class="p-[8px] text-[20px]">
                        E-mail : ericchou0517@gmail.com
                    </div>
                </div>
            </div>
            <div class="w-[100%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    class="path"
                >
                    <path
                        fill="#0099ff"
                        fillOpacity="1"
                        d="M0,256L30,261.3C60,267,120,277,180,250.7C240,224,300,160,360,149.3C420,139,480,181,540,213.3C600,245,660,267,720,277.3C780,288,840,288,900,282.7C960,277,1020,267,1080,234.7C1140,203,1200,149,1260,117.3C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </NuxtLayout>
    </div>
</template>
