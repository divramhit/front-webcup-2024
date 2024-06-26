
import { StickyScrollReveal } from "@/components/aceternity-ui/StickyScrollReveal";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";
import { customServerFetchWithoutAuth } from "@/lib/api";
import PPImage from "@/components/PPImage/PPImage";


async function getAboutUsImages () {
  const aboutUsImagesPromise = await customServerFetchWithoutAuth('/api/folders/by_name/about_us', 'GET');

  if (aboutUsImagesPromise.status === 200) {
      return  await aboutUsImagesPromise.json();
  }

  return [];
}

export default async function AboutUs() {
    let images = await getAboutUsImages();

    const content = [
        {
          title: "Welcome to Ken's Collection",
          description:
            "Discover a treasure trove of Ken's personal belongings, each item a piece of history from his iconic life post-divorce from Barbie. Known for his sophisticated taste and flair for interior design, Ken&apos;s collection features an assortment of household items that adorned the Dreamhouse. From elegant tableware to bespoke furniture, each piece tells the story of a style icon redefining his space and life.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Welcome to Ken&apos;s Collection
            </div>
          ),
        },
        {
          title: "Our Mission",
          description:
            "We are dedicated to curating Ken's unique possessions, ensuring they find new homes where they can continue to be appreciated and loved. Our mission is to seamlessly transition these items from their glamorous past in the Dreamhouse to enriching modern-day homes, offering a blend of luxury, comfort, and a splash of celebrity history.",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="/linear.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Get to Know Ken",
          description:
            "Ken, a character forever linked to Barbie yet distinct in his own right, has always been a trendsetter. His home office, filled with items like vintage cameras and travel memorabilia, reflects his personal interests and cultured lifestyle. Now, as he ventures into a new chapter alone, his collection offers fans and new admirers alike the chance to own a part of his legacy.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Get to Know Ken
            </div>
          ),
        },
        {
          title: "Ken's Iconic Style",
          description:
            "Embrace the opportunity to incorporate Kens iconic style into your living spaces. Each item in our collection, from chic décor to art pieces, showcases Ken&apos;s ability to blend contemporary trends with timeless elegance. These pieces not only enhance your home but also carry the prestige of being part of the celebrated Dreamhouse.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Ken&apos;s Iconic Style
            </div>
          ),
        },
        {
          title: "The Dreamhouse Redefined",
          description:
            "Through the items he's chosen to part with, Ken invites you to participate in the ongoing story of a beloved character. Each purchase is more than just acquiring a household item; it&apos;s about preserving a piece of pop culture, offering a unique connection to the world of Barbie and Ken.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              The Dreamhouse Redefined
            </div>
          ),
        },
    ];
    return (
        <div className="pointer-events-none">
          <PPSectionBlock>
            <div className="w-full h-full flex">
              <div className="w-3/5 full flex justify-center items-center flex-col text-center px-20">
                <div className="w-full justify-center text-center text-3xl mb-5 font-bold">About Ken</div>
                Welcome to Ken&apos;s Boutique, where every product tells a story of resilience, reinvention, and newfound independence. Formerly part of the iconic duo, Ken has embarked on a journey of self-discovery post-divorce with Barbie. Here, you&apos;ll find a curated collection of items that reflect Ken&apos;s unique taste and style, each chosen with care to bring joy and inspiration to our customers. From timeless classics to modern marvels, every piece carries a piece of Ken&apos;s journey, inviting you to embark on your own adventure of discovery. Step into Ken&apos;s world and rediscover the beauty of individuality at Ken&apos;s Boutique.
              </div>
              <div className="w-2/5 h-full flex justify-center items-center p-20">
                <PPImage
                  src={`https://puddlepirates.latchoomun.com/media/cache/original/ken-663724f03898d029049491.jpg`}
                  className="rounded-xl"
                  wrapperClassName="flex justify-center items-center"
                />
              </div>
            </div>
          </PPSectionBlock>
          <PPSectionBlock className="pointer-events-auto">
            <div className="p-10">
              <StickyScrollReveal content={content} images={images} />
            </div>
          </PPSectionBlock>
        </div>
    )
}