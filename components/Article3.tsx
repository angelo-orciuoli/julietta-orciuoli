import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Article3: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-lavender-200 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto h-20 flex items-center">
                    <a
                        href="https://angelo-orciuoli.github.io/julietta-orciuoli/"
                        className="inline-flex items-center text-lavender-600 hover:text-lavender-800 font-medium transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Return Home
                    </a>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className="mb-8">
                    <p className="text-sm text-lavender-600 font-medium uppercase tracking-wide mb-3">
                        February 19, 2024
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-6">
                        The proposed historic district in Chevy Chase is still being debated and causing tension within the community
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-medium">By Julietta Orciuoli</span>
                    </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
                    <p>
                        While some residents believe that a historic district in Chevy Chase could promote affordability and inclusion, others believe that it will do the exact opposite.
                    </p>

                    <br />

                    <p>
                        The ANC of ward 3/4G, the ward in which Chevy Chase resides, had a meeting last week in which the proposal of a historic district was widely and passionately debated among different organizations and residents.
                    </p>

                    <br />

                    <p>
                        Currently, there are 50 historic districts in DC and according to the <a href="https://planning.dc.gov/page/about-historic-landmarks-and-historic-district-0" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Office of Planning</a>, historic districts serve to protect neighborhoods’ contribution to the city's cultural and aesthetic heritage.
                    </p>

                    <br />

                    <p>
                        It has proved to be far more complicated than that though. At the ANC meeting, residents and organizations spoke of how a historic district is unnecessary and will inconvenience residents. Living in a historic district would make it harder for residents to renovate their homes or add amenities to it. On top of that, it would preserve certain buildings that could otherwise be made into affordable apartments.
                    </p>

                    <br />

                    <p>
                        However, it was also said that a historic district prevents overdevelopment and gives residents a voice in changes that may take place in their neighborhood. In recent years Chevy Chase has seen a rise in developers and house-flippers coming into the neighborhood and jacking up housing prices by millions of dollars, something that would not be possible with a historic district.
                    </p>

                    <br />

                    <p>
                        Mary Rowse, a member of the <a href="https://chevychaseconservancy.org/" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Chevy Chase Conservancy</a> and a former ANC commissioner, gave a presentation at the meeting advocating for the historic district.
                    </p>

                    <br />

                    <p>
                        “Many people talk about Chevy Chase DC as an exclusive neighborhood. I think most of us that moved here 30 to 50 years ago certainly don't think of it that way, and didn't think of it then, but we could all easily believe it now,” Rowse said.
                    </p>

                    <br />

                    <p>
                        She pointed out that housing prices have risen and it’s making Chevy Chase less affordable which in turn is driving away many different communities from the neighborhood.
                    </p>

                    <br />

                    <p>
                        Many residents agree with her as they too voiced their concerns at the meeting. One resident has seen this change firsthand.
                    </p>

                    <br />

                    <p>
                        “In 2007 I wasnt for a historic society but if I had known then what I know now I would have absolutely done with because of what's happened to us.”
                    </p>

                    <br />

                    <p>
                        A proposal for a historic district was made in 2007 as well but 77.1% of residents opposed it so it was not passed. But much has changed since then and many residents just like this one have seen the changes happening in their neighborhood and changed their minds.
                    </p>

                    <br />

                    <p>
                        The opposition, <a href="https://livingchevychase.com" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Living Chevy Chase</a>, also gave a presentation at the meeting. They pointed out that living in a historic district would be more expensive for residents as doing something as simple as replacing windows would need to go through so much red tape that would rack up the price two-fold.
                    </p>

                    <br />

                    <p>
                        “For what? For something that is not necessary, this is not a life and safety requirement, this is an aesthetic desire that would be imposed on us,” said Greg Schmitd, a resident and member of Living Chevy Chase.
                    </p>

                    <br />

                    <p>
                        This left many residents confused because both sides claim that their option is the more affordable and inclusionary one and both sides have sufficient evidence to support this claim.
                    </p>

                    <br />

                    <p>
                        Carl Lankowski, a resident of Chevy Chase, still doesn’t know where he stands. He said he’s trying to gather as much information as he can to make an informed decision.
                    </p>

                    <br />

                    <p>
                        “My concerns are about the soul of the city and the soul of our neighborhood,” Lankowski said. He wants to keep the heart of the neighborhood but is unsure how to do that.
                    </p>

                    <br />

                    <p>
                        On the other hand, some residents have formed very deep positions on this issue. Alan Marzilli passed out an infographic at the meeting titled “The Proposed Historic District is a Sham!”
                    </p>

                    <br />

                    <p>
                        After the meeting he said, “They're saying that you can look around a neighborhood and tell that that's a historic character of 1906-1964. That's absurd…They are just going to stick their noses in everybody's business.”
                    </p>

                    <br />

                    <p>
                        The proposed next step is for the Commision to call for a vote among residents within the proposed historic district to see what the majority opinion is.
                    </p>

                    <hr className="mt-8 border-t border-slate-300" />
                </div>
            </article>
        </div>
    );
};

export default Article3;
