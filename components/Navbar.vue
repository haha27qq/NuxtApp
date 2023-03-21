<template>
    <div
        class="Navbar m-0 flex h-[92px] max-w-[1200px] items-center justify-center bg-[#D6E8EE]/[0.8] p-5 sm:h-[auto]"
    >
        <div
            class="container flex flex-wrap justify-center gap-[48px] text-zinc-700"
        >
            <NuxtLink
                to="/"
                class="hovBtn px-[20px] py-[7px] font-ship hover:font-bold hover:text-cyan-900"
            >
                About me
            </NuxtLink>
            <NuxtLink
                to="/skills"
                class="hovBtn px-[20px] py-[7px] font-ship hover:font-bold hover:text-cyan-900"
            >
                Skill
            </NuxtLink>
            <NuxtLink
                to="/desc"
                class="hovBtn px-[20px] py-[7px] font-ship hover:font-bold hover:text-cyan-900"
            >
                Description
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="hovBtn px-[20px] py-[7px] font-ship hover:font-bold hover:text-cyan-900"
            >
                Contact
            </NuxtLink>
        </div>
    </div>
</template>


