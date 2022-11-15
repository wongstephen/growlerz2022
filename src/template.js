<!DOCTYPE html>
<html lang="en">

<head>
    <title>Standout</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="icon" type="image/png" sizes="32x32" href="https://tailwindsites.com/images/themes/standout/logo.png">
    <style>
        [x-cloak] {
          display: none !important;
        }
    
        html {
          scroll-behavior: smooth;
        }
        .bg {
            background-color: #ffffff;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='g' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23B7ECEC'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23g)' id='s' d='M-1-1v962.99c0 0 83-21.32 133.95 3.07c30.49 14.6 62.26 29.49 94.53 31.22c48.12 2.58 83.83-43.35 134.28-28.36c48.31 14.35 77.41 38.45 127.71 21.62c57.71-19.31 79.67-28.82 134.22-0.47c45.19 23.49 69.44-20.07 112.8-22.78c24.62-1.54 47.65 20.86 71.51 27.14c30.32 7.98 45.34-2.78 73.3-17.86c47.93-25.86 73.7 10.17 120.63 17.73c47.42 7.63 89.49-29.52 138.45-19.47c57.07 11.71 92.9 22.9 150.33 5.31c55.2-16.91 84.9-2.33 138.27 10.43c42.48 10.16 70.72-5.45 110.92-22.69c49.74-21.33 87.42-12.78 135.85 6.42c57.47 22.78 91.63 0.27 148.01-7.13c48.48-6.37 92.85 25.53 140.83 28.72c50.26 3.35 98.07-36.73 147.67-26.18c52.04 11.06 75.93 26.45 127.95 6.28c51.71-20.05 70.96 13.72 118.82 22.69c54.92 10.29 89.44-43.34 145.6-13.92c47.61 24.94 59.53-1.14 103.25-17.59c49-18.44 96.2 32.64 145.07 32c47.46-0.62 88.49-46.72 137.13-33.07c46.15 12.95 70.4 36.99 119.16 20.85c31.56-10.45 62.88-42.89 93.1-22.96C3157 999 3199 981.74 3199 981.74V-1H-1z'/%3E%3C/defs%3E%3Cg stroke='%238CACAC' stroke-width='0' %3E%3Cuse xlink:href='%23s' x='-11' y='0'/%3E%3Cuse xlink:href='%23s' x='-850' y='-150'/%3E%3Cuse xlink:href='%23s' x='-1200' y='-300'/%3E%3Cuse xlink:href='%23s' x='-144' y='-450'/%3E%3Cuse xlink:href='%23s' x='-1599' y='-600'/%3E%3Cuse xlink:href='%23s' x='-760' y='-750'/%3E%3Cuse xlink:href='%23s' x='-1336' y='-900'/%3E%3C/g%3E%3C/svg%3E");
            background-attachment: fixed;
            background-size: cover;
        }
    </style>
</head>

<body class="antialiased bg-body text-body font-body bg" x-data="{ open: false }">
    <div class="">
    {/* Nav */}
        <section class="relative overflow-hidden max-w-7xl mx-auto">
            <div class="bg-transparent">
                <nav class="flex justify-between p-6 px-6 container mx-auto">
                    <div class="flex justify-between items-center w-full">
                        <div class="w-1/2 xl:w-1/3">
                            <a class="max-w-max inline-flex items-center font-bold text-xl md:text-3xl text-gray-900 uppercase tracking-widest" href="#">
                                <img class="h-6 md:h-10" src="https://tailwindsites.com/images/themes/standout/logo.png" alt="">
                                <span class="ml-2">Standout</span>
                            </a>
                        </div>
                        <div class="w-1/2 xl:w-1/3">
                            <ul class="hidden xl:flex xl:justify-center">
                                <li class="mr-12"><a class="text-gray-500 hover:text-gray-900 font-medium"
                                        href="#features">Features</a></li>
                                <li class="mr-12"><a class="text-gray-500 hover:text-gray-900 font-medium"
                                        href="#product">Product</a></li>
                                <li class="mr-12"><a class="text-gray-500 hover:text-gray-900 font-medium"
                                        href="#pricing">Pricing</a></li>
                                <li class=""><a class="text-gray-500 hover:text-gray-900 font-medium"
                                        href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="w-1/2 xl:w-1/3">
                            <div class="hidden xl:flex items-center justify-end"><a
                                    class="inline-block py-2 px-4 mr-2 leading-5 text-gray-500 hover:text-gray-900 bg-transparent font-medium rounded-md"
                                    href="#">Log In</a><a
                                    class="inline-block py-2 px-4 text-sm leading-5 text-teal-50 bg-teal-500 hover:bg-teal-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                                    href="#">Sign Up</a></div>
                        </div>
                    </div>
                    <button class="navbar-burger self-center xl:hidden" @click="open = true">
                        <svg width="35" height="35" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect class="text-gray-50" width="32" height="32" rx="6" fill="currentColor"></rect>
                            <path class="text-gray-500"
                                d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </nav>
                <div class="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50" x-show="open" x-cloak x-transition>
                    <div class="fixed top-0 left-0 bottom-0 w-4/6 max-w-xs bg-transparent">
                        <nav class="relative p-6 h-full overflow-y-auto bg-white" @click.outside="open = false">
                            <div class="flex flex-col justify-between h-full">
                                <a class="max-w-max inline-flex items-center font-bold text-xl md:text-3xl text-gray-900 uppercase tracking-widest" href="#">
                                    <img class="h-6 md:h-10" src="https://tailwindsites.com/images/themes/standout/logo.png" alt="">
                                    <span class="ml-2">Standout</span>
                                </a>
                                <ul class="py-6">
                                    <li><a class="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-md"
                                            href="#">Product</a></li>
                                    <li><a class="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-md"
                                            href="#">Features</a></li>
                                    <li><a class="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-md"
                                            href="#">Pricing</a></li>
                                    <li><a class="block py-3 px-4 text-gray-500 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-md"
                                            href="#">Resources</a></li>
                                </ul>
                                <div class="flex flex-col flex-wrap">
                                    <div class="mb-2">
                                        <a class="inline-block py-2 px-4 w-full text-sm leading-5 text-gray-500 hover:text-gray-900 bg-transparent font-medium text-center rounded-full shadow-lg" href="#">
                                            Log In
                                        </a>
                                    </div>
                                    <div class="">
                                        <a class="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-teal-500 hover:bg-teal-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg" href="#">
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <a class="absolute top-5 p-4 right-3" href="#" @click="open = false">
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* Welcome */}
            <div class="relative pt-16 md:pt-24 pb-20 md:pb-28 lg:pb-56">
                <div class="container px-6 mx-auto">
                    <div class="relative z-10 flex flex-wrap flex-col-reverse md:flex-row -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                            <span
                                class="inline-block py-px mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">maximus lobortis</span>
                            <h1
                                class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                                Lorem ipsum dolor sit amet.</h1>
                            <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula maximus lobortis.
                            </p>
                            <div class="flex flex-wrap mb-8 md:mb-16">
                                <div class="w-auto py-1 mr-4"><a
                                        class="inline-block py-5 px-7 text-base md:text-lg leading-4 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                                        href="#">Get Started</a></div>
                                <div class="w-auto py-1"><a
                                        class="inline-block py-5 px-7 text-base md:text-lg leading-4 text-gray-800 font-medium text-center bg-trasnparent hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 rounded-full shadow-lg"
                                        href="#">Sign Up</a></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                            <div class="relative max-w-max mr-auto md:ml-auto md:mr-0">
                                <img class="rounded-full w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] border-8 border-teal-100"
                                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Product */}
        <section id="product" class="relative py-24 md:pb-32 bg-trasnparent overflow-hidden max-w-5xl mx-auto">
            <div class="relative container px-4 mx-auto">
                <div class="mb-18 md:mb-16 mx-auto text-left">
                    <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
                        Get started
                    </span>
                    <h1 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                        The fastest way from idea to live site. Period.
                    </h1>
                    <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                        The owners and staff here at Growlerz are dog lovers first and foremost.  We believe that dogs are social creatures who should get the chance to spend play time with other dogs. We believe that time spent with a dog can brighten your day, improve your mood, and reduce your stress. 
                    </p>
                    <a class="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-teal-50 bg-teal-500 hover:bg-teal-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-full shadow-lg" href="#">
                        Get Started
                    </a>
                </div>
                <div class="relative mt-4 max-w-4xl">
                    <img class="relative rounded-xl border-8 border-teal-100" src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="">
                </div>
            </div>
        </section>

        <section id="features" class="py-24 bg-trasnparent mx-auto max-w-5xl">
            <div class="container px-4 mx-auto">
                <div class="mx-auto text-left">
                    <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">Features</span>
                    <h2 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                        Gain more insight
                    </h2>
                    <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                        Sed volutpat tincidunt ante, id suscipit velit condimentum at. Nam aliquet auctor imperdiet. In volutpat dui sed porta posuere.
                    </p>
                </div>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full lg:w-1/2 px-4 lg:pt-6 mb-8 lg:mb-0">
                        <div class="pr-8 py-8 lg:mb-6 text-left max-w-sm">
                            <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-teal-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h3 class="mb-4 text-xl md:text-2xl leading-snug md:leading-snug font-bold">
                                Measure performance
                            </h3>
                            <p class="text-gray-500 font-medium leading-loose">
                                Curabitur ultricies dolor et sapien bibendum, non sagittis velit suscipit.
                            </p>
                        </div>
                        <div class="pr-8 py-8 lg:mb-6 text-left max-w-sm">
                            <div
                                class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-teal-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <h3 class="mb-4 text-xl md:text-2xl leading-snug md:leading-snug font-bold">Build your website</h3>
                            <p class="text-gray-500 font-medium leading-loose">Curabitur ultricies dolor et sapien bibendum, non sagittis velit suscipit.</p>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:pt-6 px-4">
                        <div class="pr-8 py-8 lg:mb-6 text-left max-w-sm">
                            <div
                                class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-teal-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                            </div>
                            <h3 class="mb-4 text-xl md:text-2xl leading-snug md:leading-snug font-bold">Custom analytics</h3>
                            <p class="text-gray-500 font-medium leading-loose">Curabitur ultricies dolor et sapien bibendum, non
                                sagittis velit suscipit.</p>
                        </div>
                        <div class="pr-8 py-8 lg:mb-6 text-left max-w-sm">
                            <div
                                class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-teal-500 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                </svg>
                            </div>
                            <h3 class="mb-4 text-xl md:text-2xl leading-snug md:leading-snug font-bold">Connect multiple apps</h3>
                            <p class="text-gray-500 font-medium leading-loose">Curabitur ultricies dolor et sapien bibendum, non
                                sagittis velit suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 bg-trasnparent max-w-5xl mx-auto">
            <div class="container px-4 mx-auto">
                <div class="relative mb-12 mx-auto text-left">
                    <div class="relative">
                        <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
                            Testimonials
                        </span>
                        <h2 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                            Testimonial
                        </h2>
                        <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                            Sed volutpat tincidunt ante, id suscipit velit condimentum at. Nam aliquet auctor imperdiet. In volutpat dui sed porta posuere.
                        </p>
                    </div>
                </div>
                <div class="text-left mb-12">
                    <img class="w-48 h-48 mx-right mb-6 rounded-full border-8 border-teal-100"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        alt="">
                    <h3 class="mb-2 text-xl md:text-2xl font-semibold">Jerry Seinfeld</h3>
                    <span class="text-lg text-gray-500 font-medium">CEO &amp; Founder at Bigmouth.co</span>
                </div>
                <div class="text-left">
                    <button class="inline-block h-3 w-3 mr-3 rounded-full bg-gray-100"></button>
                    <button class="inline-block h-3 w-3 mr-3 rounded-full bg-teal-500"></button>
                    <button class="inline-block h-3 w-3 rounded-full bg-gray-100"></button>
                </div>
            </div>
        </section>

        <section id="pricing" class="py-20 xl:py-24 bg-trasnparent max-w-5xl mx-auto">
            <div class="container px-4 mx-auto">
                <div class="text-left">
                    <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">Pricing</span>
                    <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                        Straight forward pricing for your startup
                    </h3>
                    <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                        Maecenas vehicula elit quis rutrum maximus. Sed finibus neque quis tellus mattis, placerat mattis mi varius. Proin pharetra egetdiam et sollicitudin.
                    </p>
                </div>
                <div class="flex flex-wrap justify-center -mx-4">
                    <div class="w-full md:w-1/2 p-4">
                        <div
                            class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
                            <div class="px-8 pb-8">
                                <h3 class="mb-6 text-lg md:text-xl text-gray-800 font-medium">Small</h3>
                                <div class="mb-6">
                                    <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">$</span>
                                    <span class="text-6xl md:text-7xl text-gray-900 font-semibold">10</span>
                                    <span class="inline-block ml-1 text-gray-500 font-semibold">per month</span>
                                </div>
                                <p class="mb-6 text-gray-400 font-medium">Basic features for up to 10 users.</p>
                                <a class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg" href="#">
                                    Get Started
                                </a>
                            </div>
                            <div class="border-b border-gray-100"></div>
                            <ul class="self-start px-8 pt-8">
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Access to all features</span>
                                </li>
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>One-click sharing</span>
                                </li>
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>10GB cloud storage</span>
                                </li>
                                <li class="flex items-center text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>10 team members</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 p-4">
                        <div
                            class="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
                            <div class="px-8 pb-8">
                                <div class="flex flex-wrap items-center justify-between mb-6">
                                    <h3 class="mr-3 text-lg md:text-xl text-gray-800 font-medium">Medium</h3>
                                    <span
                                        class="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-full">Popular</span>
                                </div>
                                <div class="mb-6">
                                    <span class="relative -top-10 right-1 text-3xl text-gray-900 font-bold">$</span>
                                    <span class="text-6xl md:text-7xl text-gray-900 font-semibold">99</span>
                                    <span class="inline-block ml-1 text-gray-500 font-semibold">per month</span>
                                </div>
                                <p class="mb-6 text-gray-400 font-medium">Basic features for up to 100 users.</p>
                                <a class="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg" href="#">
                                    Get Started
                                </a>
                            </div>
                            <div class="border-b border-gray-100"></div>
                            <ul class="self-start px-8 pt-8">
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Access to all features</span>
                                </li>
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>One-click sharing</span>
                                </li>
                                <li class="flex items-center mb-3 text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>100GB cloud storage</span>
                                </li>
                                <li class="flex items-center text-gray-500 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="fill-teal-400 w-6 h-6 mr-3">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>100 team members</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* FAQ */}
        <section id="faq" class="py-24 md:pt-32 bg-trasnparent max-w-5xl mx-auto">
            <div class="container px-4 mx-auto">
                <div class="text-left">
                    <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
                        FAQ
                    </span>                    
                    <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                        Frequently Asked Questions
                    </h3>
                    <p class="mb-8 text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
                        Maecenas vehicula elit quis rutrum maximus. Sed finibus neque quis tellus mattis, placerat mattis mi varius. Proin pharetra egetdiam et sollicitudin.
                    </p>
                </div>
                <div class="flex flex-wrap -mx-4 pt-12 max-w-4xl">
                    <div class="w-full md:w-1/2 px-4 mb-16">
                        <div class="group h-full">
                            <div
                                class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                                <div
                                    class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-trasnparent rounded-full transition duration-200">
                                    <div
                                        class="inline-flex items-center justify-center w-12 h-12 text-white bg-teal-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold max-w-xs">Cras nec nulla ut ex
                                    ullamcorper?</h3>
                                <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                                    Donec et felis sit amet nisl luctus sollicitudin in vitae nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4 mb-16">
                        <div class="group h-full">
                            <div
                                class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                                <div
                                    class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-trasnparent rounded-full transition duration-200">
                                    <div
                                        class="inline-flex items-center justify-center w-12 h-12 text-white bg-teal-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold max-w-xs">Cras nec nulla ut ex
                                    ullamcorper?</h3>
                                <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                                    Aenean blandit, tellus vel vehicula rhoncus, diam neque interdum tortor, vel finibus
                                    arcu dolor quis mi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4 mb-16">
                        <div class="group h-full">
                            <div
                                class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                                <div
                                    class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-trasnparent rounded-full transition duration-200">
                                    <div
                                        class="inline-flex items-center justify-center w-12 h-12 text-white bg-teal-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold max-w-xs">Sed finibus neque
                                    quis tellus mattis?</h3>
                                <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                                    Sed volutpat tincidunt ante, id suscipit velit condimentum at.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4 mb-16">
                        <div class="group h-full">
                            <div
                                class="group relative h-full px-8 pt-16 pb-8 bg-white group-hover:bg-trasnparent rounded-md shadow-md hover:shadow-xl transition duration-200">
                                <div
                                    class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center bg-trasnparent rounded-full transition duration-200">
                                    <div
                                        class="inline-flex items-center justify-center w-12 h-12 text-white bg-teal-500 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 class="mb-4 text-xl leading-7 text-gray-900 font-bold max-w-xs">
                                    Cras non felis et neque congue venenatis?
                                </h3>
                                <p class="text-gray-500 group-hover:text-gray-600 font-medium transition duration-200">
                                    Nam at ligula vehicula, tempus elit nec, suscipit tortor. Vestibulum ac venenatis lorem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="footer" class="bg-trasnparent max-w-7xl mx-auto">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap pt-24 pb-12 -mx-4">
                    <div class="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
                        <a class="inline-flex mb-4 font-bold text-2xl text-gray-9 items-center uppercase tracking-wider"
                            href="#">
                            <img class="h-8" src="https://tailwindsites.com/images/themes/standout/logo.png" alt=""><span class="ml-2">Standout</span>
                        </a>
                        <p class="text-base md:text-lg text-gray-500 font-medium lg:w-64">Launch your own product fast
                            with Standout.</p>
                    </div>
                    <div class="w-full md:w-1/4 lg:w-2/12 px-4 md:mb-16 lg:mb-0">
                        <h3 class="mb-5 text-lg font-bold text-gray-900">Links</h3>
                        <ul>
                            <li class="mb-4"><a class="inline-block text-gray-500 hover:text-gray-600 font-medium"
                                    href="#features">Features</a></li>
                            <li class="mb-4"><a class="inline-block text-gray-500 hover:text-gray-600 font-medium"
                                    href="#product">Product</a></li>
                            <li class="mb-4"><a class="inline-block text-gray-500 hover:text-gray-600 font-medium"
                                    href="#pricing">Pricing</a></li>

                        </ul>
                    </div>
                    <div class="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <ul class="md:mt-12">
                            <li class="mb-4"><a class="inline-block text-gray-500 hover:text-gray-600 font-medium"
                                    href="#faq">FAQ</a></li>
                            <li class="mb-4"><a class="inline-block text-gray-500 hover:text-gray-600 font-medium"
                                    href="#footer">Newsletter</a></li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-4/12 px-4">
                        <h3 class="mb-5 text-lg font-bold text-gray-900">
                            Newsletter
                        </h3>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                                <input class="px-3 w-full h-12 text-gray-900 outline-none placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
                                    placeholder="Your email">
                            </div>
                            <div class="w-full lg:w-auto py-1 lg:py-0"><a
                                    class="inline-block py-4 px-5 w-full leading-4 text-teal-50 font-medium text-center bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full shadow-lg"
                                    href="#">Subscribe</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-gray-100"></div>
            <p class="py-10 md:pb-16 text-sm text-gray-400 font-medium text-center">
                © 2022 Tailwindsites. All rights reserved.
            </p>
        </section>
    </div>
</body>

</html>