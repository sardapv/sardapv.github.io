<script>
	import Link from 'components/link.svelte';
</script>

<div
	class="p-3 pl-6 sm:pl-3 flex flex-col items-center mx-[4vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center"
>
	<div class="max-w-2xl lg:max-w-full">
		<div class="grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-12">
			<div class="lg:row-span-2">
				<section>
					<h1 class="text-4xl font-semibold font-gilroy text-black dark:text-slate-50">
						ACI Worldwide... My first stint 🏏
					</h1>
					<div class="text-sm mt-5 font-normal">
						<div class="my-2 relative">
							During my tenure at ACI Worldwide Pune, a US-based Payments Company, I embarked on my
							professional journey, gaining valuable experience and working with various technology
							stacks until March 2021. Below is a summary of my accomplishments and contributions at
							ACI:
							<p class="absolute -left-20 -bottom-8 text-[18px] text-yellow-400 font-medium">
								2021
							</p>
							<p class="absolute -left-20 -bottom-16 text-[15px] text-yellow-300 font-medium">
								2020
							</p>
							<p class="absolute -left-20 -bottom-24 text-[14px] text-yellow-200 font-medium">
								2019
							</p>
							<p class="absolute -left-20 -bottom-32 text-[12px] text-yellow-100 font-medium">
								2018
							</p>
						</div>
						<ul class="flex flex-col gap-y-2 bullet-chain">
							<li>
								<p>
									Built a Hybrid Web Mobile Application from scratch in Ionic 3 & Cordova & Angular
									8, taking ownership and adding significant business value as a valuable asset.
								</p>
							</li>
							<li>
								<p>
									Actively participated in an Agile Development Team, continuously delivering
									enhancements for a seamless user experience on a Web Banking Portal. Worked on
									Angular 9, TypeScript, JavaScript, Spring, Java, and Maven, also integrated IBM
									Security SDKs for enhanced security on both web & mobile app platform.
								</p>
							</li>
							<li>
								<p>
									Contributed to the feature addition in an in-house automation tool and utilized
									Katalon for UI Automation, improving efficiency and test coverage.
								</p>
							</li>
							<li>
								<p>
									Collaborated closely with Top Management, Architects, Consultants, and Customers
									to align with requirements and expectations.
								</p>
							</li>
							<li>
								<p>
									Worked with the sales team to demo the application, enabling effortless onboarding
									and upgrades for banks and customers.
								</p>
							</li>
							<li>
								<p>
									Secured contracts with five banks, showcasing native features like Remote Deposit
									Capture and Biometric Authentication.
								</p>
							</li>
							<li>
								<p>
									Designed and developed proposed features, roadmaps, upgrades, and maintenance
									plans, ensuring continuous improvement.
								</p>
							</li>
							<li>
								<p>
									Implemented automated tools for build and branding processes, streamlining
									deployment and customization.
								</p>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<div class="px-6 pt-4 lg:pt-20 flex justify-center order-first lg:order-last">
				<img
					src="/images/me.jpg"
					alt="me"
					decoding="async"
					class="rounded-2xl rotate-3 object-cover shadow-sm bg-slate-800"
					height="500"
					width="350"
				/>
			</div>
		</div>
		<div class="my-2" />
		<div class="grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-12">
			<div class="lg:row-span-2">
				<section>
					<h1 class="text-4xl font-semibold font-gilroy text-black dark:text-slate-50">
						Open Money & Zwitch.io... <br /> My 2nd & a startup stint 🦄
					</h1>
					<div class="text-sm mt-5 font-normal">
						<div class="my-2 relative">
							After a detour from full-stack development, I followed my passion for frontend
							development and joined a Series B funded fintech startup in 2021. During my time at
							Zwitch (Open), Asia's first low code for embedded finance platform, my team and I
							successfully developed four applications that made a significant contribution to
							Open's sales and some of these also contributed to success in securing further rounds
							of funding. Here is a summary of my accomplishments at Zwitch (Open).
							<p class="absolute -left-20 -bottom-8 text-[18px] text-yellow-400 font-medium">
								2023
							</p>
							<p class="absolute -left-20 -bottom-16 text-[15px] text-yellow-300 font-medium">
								2022
							</p>
							<p class="absolute -left-20 -bottom-24 text-[14px] text-yellow-200 font-medium">
								2021
							</p>
						</div>
						<h3 class="my-2 text-sky-500 font-medium">
							Lead Frontend Engineer | July 2022 - Present
						</h3>
						<ul class="flex flex-col gap-y-2 bullet-chain">
							<li>
								<p>
									B2B Payments SDK: Led a 4 member team in developing a themeable B2B payment
									solution. Created a flexible payment gateway SDK hosted on CDN for seamless
									integration.
									<br />
									<span class="text-xs mt-1 dark:text-slate-400"
										>TechStack: SvelteKit+SSR, TypeScript, DaisyUI, TailwindCSS, Nx, Custom Event
										Bus, AWS S3 + Cloudfront CDN.</span
									>
								</p>
							</li>
							<li>
								<p>
									Embeddable Elements SDK: Led a 4 member team in creating framework-independent
									financial widgets with a customization studio. Enabled tasks like account opening
									and management within web/mobile apps. <br />
									<span class="text-xs mt-1 dark:text-slate-400">
										TechStack: Stenciljs, WebComponents, SCSS, TypeScript, Nx, AWS S3 + Cloudfront
										CDN.
									</span>
								</p>
							</li>
							<li>
								<p>
									Elements & Cards Studio: Co-built customization studios within Zwitch Dashboard.
									Empowered users to modify fonts, colors, logos, and create customized cards.
									<br />

									<span class="text-xs mt-1 dark:text-slate-400">
										TechStack: Angular 14, RxJs, SVG, TailwindCSS, Material UI, SCSS, Nx.
									</span>
								</p>
							</li>
						</ul>
						<h3 class="my-2 text-sky-500 font-medium">
							Software Engineer | March 2021 - July 2022
						</h3>
						<ul class="flex flex-col gap-y-2 bullet-chain">
							<li>
								<p>
									Zwitch Dashboard: Independently developed a feature-rich dashboard resembling
									Stripe. Implemented onboarding, multiple login modes, API playground, accounts &
									payments reports, and more. Managed team and provided technical leadership.
									<br />
									<span class="text-xs mt-1 dark:text-slate-400">
										TechStack: Angular 12, RxJs, TailwindCSS, Material UI, SCSS, Nx.
									</span>
								</p>
							</li>
						</ul>
					</div>
				</section>
			</div>

			<div class="px-6 pt-4 lg:pt-20 lg:pr-28 flex justify-center order-first lg:order-first">
				<img
					src="/images/me.jpg"
					alt="me"
					decoding="async"
					class="rounded-2xl -rotate-3 object-cover shadow-sm bg-slate-800"
					height="500"
					width="350"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.bullet-chain {
		p {
			@apply relative;
			&::after {
				content: '';
				left: -23px;
				@apply absolute top-4 h-full w-[2px] bg-sky-500 bg-opacity-30;
			}
		}
		li {
			@apply relative;
			&::after {
				content: '';
				@apply absolute -left-7 top-1 w-3 h-3 border border-sky-400 rounded-full z-10;
			}
			&::before {
				content: '';
				left: -25px;
				top: 7px;
				height: 6px;
				width: 6px;
				@apply rounded-full bg-sky-400 absolute z-10;
			}
		}
		li:last-child p::after {
			display: none;
		}
	}
</style>
