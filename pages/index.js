import Head from "next/head";

export const config = { amp: true };

export default function Home() {
  return (
    <>
      <Head>
        <title>Drive your Finances</title>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
      </Head>

      <amp-story
        id="story"
        standalone=""
        title="Stories in AMP - Hello World"
        publisher="AMP Project"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
        poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
        poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
      >
        {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
        <amp-story-page id="page-1">
          <amp-story-grid-layer template="fill">
            <figure>
              <amp-img
                src="/static/images/joseph-akbrud-3GX4PJ-qces-unsplash.jpg"
                width="560"
                height="920"
                layout="responsive"
              />
              <figcaption
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "0.5rem",
                }}
              >
                Photo by Joseph Akbrud(Unsplash)
              </figcaption>
            </figure>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Reach your Goals</h1>
            <p>A story about driving your finance</p>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        <amp-story-page id="page-2">
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay=""
              loop=""
              width="720"
              height="960"
              poster="/static/images/emile-seguin-R9OueKOtGGU-unsplash.jpg"
              layout="responsive"
            >
              <source
                src="/static/videos/coverr-lake-view-1572182181649.mp4"
                type="video/mp4"
              />
            </amp-video>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>How do we get there?</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
        <amp-story-page id="animation-demo">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="/static/images/emile-seguin-R9OueKOtGGU-unsplash.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <div
              animate-in="fly-in-bottom"
              grid-area="upper-third"
              animate-in-delay="0.4s"
            >
              <span>1. Reduce Costs</span>
              <p>brief description here</p>
            </div>
            <div
              animate-in="fly-in-bottom"
              grid-area="middle-third"
              animate-in-delay="0.6s"
            >
              <span>2. Reduce Debt</span>
              <p>brief description here</p>
            </div>
            <div
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.8s"
            >
              <span>3. Pay yourself first</span>
              <p>brief description here</p>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-bookend
          src="/static/json/resources.json"
          layout="nodisplay"
        />
      </amp-story>
    </>
  );
}
