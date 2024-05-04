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

const Home = async () => {

	const HeadingOne = explodeWords("Divorce Done, Deals On! Ken's Resells Await - Dive In Now!")
	const homeBannerImagesFolderResponse = await customServerFetchWithoutAuth('/api/folders/by_name/home_banner_images', 'GET');
	const homeBannerImagesFolder = await homeBannerImagesFolderResponse.json();
	const bannerMedias = homeBannerImagesFolder?.medias ?? []

	const barbieImg = getMediaOriginalUrl(bannerMedias, "1");
	const kenImg = getMediaOriginalUrl(bannerMedias, "2");
	const brokenHeartImg = getMediaOriginalUrl(bannerMedias, "broken heart");
	
    return (
		<div className="w-100 pointer-events-none mb-10">
			<PPSectionBlock className={'h-[80svh]'}>
				<div className="w-full h-full flex p-8 lg:p-16 lg:flex-row gap-y-10 lg:gap-x-28 lg:gap-y-0">
					<div className="px-10 rounded-3xl w-full lg:w-3/5 h-full flex flex-col gap-y-10 justify-center items-center ">
						<div className="w-full flex flex-col">
							<TypewriterEffect words={HeadingOne}/>
						</div>
						<Button
							className="pointer-events-auto bg-gradient-to-r from-pp-primary to-pp-secondary text-white w-64 h-16 text-2xl font-extrabold flex items-center"
							size="lg"
							variant="shadow"
						>
							Shop Now <IconChevronRight size={20}/>
						</Button>
					</div>
					<div className=" rounded-3xl w-full lg:w-2/5 h-full flex flex-col gap-y-3 justify-center items-center ">
						<div className="w-full h-full relative">
							<div className="w-72 shadow-lg absolute top-4 left-4 p-2 z-0 bg-gradient-to-r from-pp-primary to-pp-secondary rounded-lg">
								<PPImage
									alt="broken-heart"
									className="object-cover"
									src={kenImg}
									loading='lazy'

								/>
							</div>
							<div className="w-72 absolute shadow-lg bottom-4 right-4 p-2 z-0 bg-gradient-to-r from-pp-primary to-pp-secondary rounded-lg">
								<PPImage
									alt="broken-heart"
									className="object-cover rounded-lg"
									src={barbieImg}
									loading='lazy'
								/>
							</div>
							<PPImage
								alt="broken-heart"
								className="object-cover w-20"
								src={brokenHeartImg}
								loading='lazy'
								wrapperClassName="absolute top-0 flex justify-center items-center z-1"
							/>
						</div>
					</div>
				</div>
			</PPSectionBlock>
			<PPSectionBlock className={'h-[20svh] flex justify-center items-center'}>
				<div className="w-11/12 px-10 rounded-[8px] backdrop-blur-sm text-center text-xl font-bold flex items-center bg-pp-home-intro/70 dark:bg-pp-home-intro-dark/70 h-full">
					Welcome to our resale haven, where treasures find new owners and stories continue to unfold! 
					Dive into our diverse selection of pre-loved goods, where you might just stumble upon Ken's collectible waiting to be rediscovered. 
					From vintage finds to modern marvels, our platform offers something for everyone.Let the adventure begin!
				</div>
			</PPSectionBlock>
		</div>
    )
}

export default Home;