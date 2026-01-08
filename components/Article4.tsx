import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Article4: React.FC = () => {
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
                        February 6, 2024
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-6">
                        Food Insecurity: The secret epidemic plaguing American University
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-medium">By Julietta Orciuoli</span>
                    </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
                    <p>
                        Food insecurity among college students is an epidemic and although American University prides itself
                        on being progressive, it is just exacerbating the problem.
                    </p>

                    <br />

                    <p>
                        <a href="https://moveforhunger.org/blog/millions-college-students-are-facing-hunger" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">Nearly one-third</a> of students attending a four-year university experience food insecurity. It was reported that 44% of AU students struggled with food insecurity at one point, higher than the national average.
                    </p>

                    <br />

                    <p>
                        This should be no surprise to anyone familiar with AU though. The <a href="https://www.american.edu/student-affairs/onecarddining/mealplan.cfm" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">standard</a> meal plan here is about $626 per month, that is 39% more than the national average of <a href="https://educationdata.org/average-monthly-food-spend-college-student" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-800 underline">$450</a>. This meal plan doesn’t even cover enough for students to have three meals a day all days of the week.
                    </p>

                    <br />

                    <p>
                        Claire Baranovic, a sophomore at AU, faced challenges regarding her meal plan last semester. Even though she was paying upwards of $2,000 (around $500 per month) she still struggled to get an adequate amount of food everyday.
                    </p>

                    <br />

                    <p>
                        “I didn’t have anything to eat for the last three days of the week,” Baranovic said when she expressed her frustrations towards the meal plan.
                    </p>

                    <br />

                    <p>
                        This is a prevalent problem on campus and affecting so many students, so what are AU administrators doing about it? The most notable effort to help students in need is The Market, AUs very own food pantry.
                    </p>

                    <br />

                    <p>
                        The Market could be a resource that helps many students, yet it’s kept under the radar as only approximately 500 students use it. One student organization is trying to fix this. The Food Network Recovery (FRN) is a club that donates food to The Market that would be otherwise wasted. They take leftover food from on campus dining locations such as Starbucks and Panera and puts it in The Market.
                    </p>

                    <br />

                    <p>
                        That being said, The Market still faces challenges in regards to the amount of donations received. Gabi Selmonosky, Vice President of FRN, said that whenever she goes into The Market it’s practically empty. She believes that getting the word out about The Market's existence and significance is of utmost importance. She emphasizes that students should donate what they can when they can.
                    </p>

                    <br />

                    <p>
                        “There should be more awareness about The Market and the fact that it accepts pretty much anything. I see people throw away food all the time. If you have five extra granola bars you can donate it and people can use that.” She said.                                                
                    </p>

                    <br />

                    <p>
                        The president of FRN, Natalie Hausmann, agrees, although she has a more radical belief. She thinks that the AU administration should be doing more to support their students. She thinks that the first step to spreading awareness has to be on a higher level. “AU doesn’t wanna acknowledge that their students are food insecure, they should be doing more,” Hausmann said.
                    </p>

                    <br />

                    <p>
                        Hausmann goes on to explain that AU portrays an image of their students being ‘changemakers’ but believes that this is hypocritical. She believes that, although AU defines itself as a school that ignites change, “students can’t be changemakers if they’re going hungry.”
                    </p>

                    <br />

                    <p>
                        Food insecurity is a growing, nationwide problem, but in our community as well. While there are resources available, there doesn’t seem to be much awareness or recognition that they exist. Students need support in order to thrive academically and in all facets of their lives, AU should be providing such opportunities.
                    </p>

                    <hr className="mt-8 border-t border-slate-300" />
                </div>
            </article>
        </div>
    );
};

export default Article4;
