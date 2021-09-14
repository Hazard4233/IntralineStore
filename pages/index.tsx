import { Layout, DynamicComponent } from '@components/common'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SbEditableContent } from "storyblok-react"
import Storyblok, { useStoryblok } from '@lib/storyblok'
import getDetailsFromStory from '@lib/storyblokBigCommerce'


import { getConfig } from '@framework/api'

// export async function getStaticProps({
//   preview,
//   locale,
// }: GetStaticPropsContext) {
//   const config = getConfig({ locale })

//   const sbParams = {
//     version: preview ? "draft" : "published"
//   }
 
//   const { data: { story }} = await Storyblok.get('cdn/stories/home', sbParams)
//   const copyOfStory = Object.assign({}, story)
//   const fullProducts = await getDetailsFromStory({ story, config, preview })
//   copyOfStory.content = fullProducts

//   return {
//     props: {
//       story: copyOfStory,
//     },
//     revalidate: 14400,
//   }
// }

const nonNullable = (v: any) => v

export default function Home({
  // story,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const liveStory = useStoryblok(story);

  // const components = liveStory.content.body.map((blok: SbEditableContent) => { 
  //   return (<DynamicComponent blok={blok} key={blok._uid} />)
  // })

  return (
    <div className="">
      <img className="w-full" src="../assets/img/home-part1-bg.png"></img>
      <div className="z-50 text-white font-bold -mt-32 mx-60 flex">
        <div className="text-4xl">Our Categories.</div>
        <div className="flex items-center ml-auto">
          <div>Explore All</div>
          <div className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      
      {/* { components } */}
    </div>
  )
}

Home.Layout = Layout
