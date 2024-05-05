import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { TracingBeamDemo } from "@/components/aceternity-ui/TracingBeamDemo";
import { Highlight } from "@/components/baseAceternityUi/hero-highlight/hero-highlight";
import { explodeWords } from "@/utils/helpers/homeHelper";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/baseAceternityUi/typewriter-effect/typewriter-effect";
import {Button} from "@nextui-org/button";
import { IconChevronRight } from "@tabler/icons-react";
import PPImage from "@/components/PPImage/PPImage";
import { customServerFetchWithoutAuth } from "@/lib/api";
import { getMediaOriginalUrl } from "@/utils/helpers/mediaHelper";
import Link from "next/link";

const Home = async () => {

	const HeadingOne = explodeWords(`Divorce Done, Deals On! Ken's Resells Await - Dive In Now!`)
	const homeBannerImagesFolderResponse = await customServerFetchWithoutAuth('/api/folders/by_name/home_banner_images', 'GET');
	const homeBannerImagesFolder = await homeBannerImagesFolderResponse.json();
	const bannerMedias = homeBannerImagesFolder?.medias ?? []

	const barbieImg = getMediaOriginalUrl(bannerMedias, "1");
	const kenImg = getMediaOriginalUrl(bannerMedias, "2");
	const brokenHeartImg = getMediaOriginalUrl(bannerMedias, "broken heart");
	
    return (
		<div className="w-100 pointer-events-none mb-10">
			<PPSectionBlock className={'h-[80svh]'}>
				<div className="w-full h-full flex flex-col p-8 lg:p-16 lg:flex-row gap-y-10 lg:gap-x-28 lg:gap-y-0">
					<div className="px-10 rounded-3xl w-full lg:w-3/5 h-full flex flex-col gap-y-5 lg:gap-y-10 justify-center items-center ">
						<div className="w-full flex flex-col">
							<TypewriterEffect words={HeadingOne}/>
						</div>
						<Link href="/category">
							<Button
								className="pointer-events-auto bg-gradient-to-r from-pp-primary to-pp-secondary text-white w-36 h-12 lg:w-64 lg:h-16 text-sm lg:text-2xl font-extrabold flex items-center"
								size="lg"
								variant="shadow"
							>
								Shop Now <IconChevronRight className="hidden lg:flex" size={20}/> <IconChevronRight className="flex lg:hidden" size={15}/>
							</Button>
						</Link>
					</div>
					<div className="rounded-3xl w-full lg:w-2/5 h-full flex flex-col gap-y-3 justify-center items-center ">
						<div className="w-full h-full relative">
							<div className="w-36 xl:w-56 3xl:w-72 shadow-lg absolute top-4 left-4 p-2 z-0 bg-gradient-to-r from-pp-primary to-pp-secondary rounded-lg">
								<PPImage
									alt="broken-heart"
									className="object-cover rotate-12"
									src={kenImg}
									loading='lazy'

								/>
							</div>
							<div className="w-36 xl:w-56 3xl:w-72 absolute shadow-lg bottom-4 right-4 p-2 z-0 bg-gradient-to-r from-pp-primary to-pp-secondary rounded-lg">
								<PPImage
									alt="broken-heart"
									className="object-cover rounded-lg rotate-[-12deg]"
									src={barbieImg}
									loading='lazy'
								/>
							</div>
							<div className="absolute top-0 flex w-full h-full justify-center items-center z-1">
								<PPImage
									alt="broken-heart"
									className="object-cover animate-bounce mt-6"
									src={brokenHeartImg}
									loading='lazy'
									wrapperClassName="w-16 h-16 rotate-[-12deg] xl:w-28 xl:h-28 3xl:w-32 3xl:h-32"
								/>
							</div>
						</div>
					</div>
				</div>
			</PPSectionBlock>
			<PPSectionBlock className={'h-fit lg:h-[20svh] flex justify-center items-center'}>
				<div className="w-9/12 px-10 py-6 lg:py-0 rounded-[8px] backdrop-blur-sm text-center text-xl font-bold flex items-center text-white bg-gradient-to-r from-pp-primary to-pp-secondary h-full">
					Welcome to our resale haven, where treasures find new owners and stories continue to unfold! 
					Dive into our diverse selection of pre-loved goods, where you might just stumble upon Ken&apos;s collectible waiting to be rediscovered. 
					From vintage finds to modern marvels, our platform offers something for everyone.Let the adventure begin!
				</div>
			</PPSectionBlock>
		</div>
    )
}

export default Home;