import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Article2: React.FC = () => {
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
                        href="/"
                        className="inline-flex items-center text-lavender-600 hover:text-lavender-800 font-medium transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to all articles
                    </a>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className="mb-8">
                    <p className="text-sm text-lavender-600 font-medium uppercase tracking-wide mb-3">
                        March 18, 2024
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-6">
                        American University students have a false sense of safety in DCs second most dangerous ward
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-medium">By Julietta Orciuoli</span>
                    </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
                    <p>
                        Washington, D.C. 's Ward 2 includes popular neighborhoods like Dupont Circle that American University students who, on most weekends, visit the bars and clubs that create the area's active nightlife scene. Ward 2 also has some of the city's <a href="https://www.crimedatadc.com/ward" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">highest crime rates</a>.
                    </p>

                    <br />

                    <p>
                        In response to the rising crime rate in Ward 2, but also all of D.C., Mayor Bowser signed a new crime bill just last month. This crime bill is over 100 pages long and is supposed to combat the citywide crime crisis in many ways.
                    </p>

                    <br />

                    <p>
                        Although it is too early to see the effects of the crime bill, a neighborhood like DuPont Circle could be impacted greatly by it. According to <a href="https://crimecards.dc.gov/all:violent%20crimes/with%20any%20or%20no%20weapon/dated::01012022:01012024/in:ANC:2B" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Crime Cards DC</a> the crime rate from 2022 to 2024 is 67% higher than the crime rate from 2020 to 2022 in DuPont circle. This rise in crime comes from an uptick in almost all violent crimes including robbery, assault and homicide.
                    </p>

                    <br />

                    <p>
                        Even though DuPont is a neighborhood that is growing more dangerous, AU students don’t perceive it that way: many students are either unaware of the rising crime in the area or simply don’t care.
                    </p>

                    <br />

                    <p>
                        This can be due to the fact that the AU campus is located in the safest ward in DC and is surrounded by some of the most wealthy neighborhoods in DC. Living in such an area causes students to have a warped perception of safety when they trek out into the rest of the city.
                    </p>

                    <br />

                    <p>
                        Josue Duron-Padilla, who grew up in the area, is one example of this, “I guess like statistically Tenley is safer but, I don’t know, Dupont is still better in my mind.”
                    </p>

                    <br />

                    <p>
                        This mentality is not completely unwarranted though, Tenleytown, the neighborhood closest to campus, still has its fair share of crime. Just last semester there was a <a href="https://opendata.dc.gov/datasets/DCGIS::crime-incidents-in-2023/explore?filters=eyJBTkMiOlsiM0UiXSwiT0ZGRU5TRSI6WyJIT01JQ0lERSIsIkFTU0FVTFQgVy9EQU5HRVJPVVMgV0VBUE9OIiwiU0VYIEFCVVNFIiwiUk9CQkVSWSJdfQ%3D%3D&location=38.903491%2C-77.012050%2C10.91&showTable=true" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">shooting</a> there that shook students up.
                    </p>

                    <br />

                    <p>
                        Bri Altieri, a sophomore at AU, mentioned that this incident is one of the most prominent reasons she doesn’t feel safe in Tenleytown. “I would say I feel 75% safe in Tenley and 97% safe in Dupont,” she said.
                    </p>

                    <br />

                    <p>
                        Altieri goes out clubbing in DuPont almost every weekend and feels safer there because “there's police everywhere and just so many people so I'm more comfortable there.” She still holds this belief although she knows multiple people that have been roofied at the clubs she frequents. On top of that she knows a bouncer, <a href="https://www.justice.gov/usao-dc/pr/district-man-pleads-guilty-federal-charges-escaping-halfway-house-and-possession-handgun" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Bijon Brown</a>, at a club called Heist who has been arrested four times for violent crimes.
                    </p>

                    <br />

                    <p>
                        Most recently, Brown was arrested and sentenced to five years for shooting a juvenile in 2018 and then subsequently escaping from a halfway home. Since getting out on probation he has gotten a job at Heist.
                    </p>

                    <br />

                    <p>
                        Brown is known personally by many students at AU and strikes up conversations with them when he's working. Students don’t seem to care about his record and still go clubbing there very often.
                    </p>

                    <br />

                    <p>
                        Duron-Padilla is one of those students. He, like Altieri, is aware of this situation and still feels more comfortable in Dupont than Tenleytown.
                    </p>

                    <br />

                    <p>
                        “In DuPont there's too many people for shit not to happen but Tenley is one of the jankiest places on this side of the city,” he said.
                    </p>

                    <br />

                    <p>
                        The incident surrounding Brown, however, put skepticism in another sophomore at AU, Maren Doughtery. She also enjoys clubbing and said, “I would not rely on bouncers and police to keep me safe in DuPont, I think they undermine how genuinely scary it can be to go out as a young woman.” She, instead, feels safety in numbers, saying that she still goes out frequently because she feels secure among her large group of friends.
                    </p>

                    <br />

                    <p>
                        Dougherty's fear extends beyond just DuPont though, she feels unsafe in Tenleytown as well. “Being a young female anywhere is scary, I carry pepper spray everywhere cause you just never know.” She doesn’t feel an exaggerated sense of danger in DuPont specifically, even with the high crime rate, she just has an underlying fear wherever she goes.
                    </p>

                    <br />

                    <p>
                        Dougherty believes that everyone should know self defense and should carry pepper spray or a taser “just in case”.
                    </p>

                    <hr className="mt-8 border-t border-slate-300" />
                </div>
            </article>
        </div>
    );
};

export default Article2;
