import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const Article1: React.FC = () => {
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
                        April 9, 2024
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-6">
                        The Muslim Student Union at American University struggles to find support and funding but still shows up for their community regardless
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-medium">By Julietta Orciuoli</span>
                    </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none font-sans text-slate-700 leading-relaxed">
                    <p>
                        Today marks the last day of Ramadan, and although it is a holiday celebrated every year by Muslims, it held a new level of significance to the community this year due to the Israel-Palestine war.
                    </p>

                    <br />

                    <p>
                        The Muslim Student Union (MSA) at American University celebrates Ramadan together every year. Every night of Ramadan they would host Iftars, which marks the breaking of the fast at night. The MSA would cater food and hold the entire event by themselves and invite everyone to come and be with them during this special period of time.
                    </p>

                    <br />

                    <p>
                        Ramadan is all about community and being with people, whether it be breaking the fast in the morning or at night, praying together, or just getting together to celebrate culture, community is of profound importance during this time.
                    </p>

                    <br />

                    <p>
                        Aseel Osman, Co-President of the MSA, highlighted the importance of having a Muslim community away from home, “This is people's first time celebrating Ramadan alone. All of the sudden you’re apart from home, this is your first time fasting alone, this is your first time fasting without a family like the least that you wanna do is break your fast with someone at the end of the day.”
                    </p>

                    <br />

                    <p>
                        This is why the Iftars that the MSA held throughout Ramadan were something that held deep significance to them and the extended Muslim community on campus. That being said, the MSA struggled with getting the proper funding and resources to hold these Iftars every night. Osman said that the Iftars ranged from $700 to $950 a night.
                    </p>

                    <br />

                    <p>
                        The lack of funding towards the MSA and disregard surrounding the Muslim community and holidays was quite frustrating to those in the MSA. The faculty advisor, Amaarah DeCuir, acts as a liaison between the students and administration. She holds these same frustrations and said, “Whether the university is fostering an environment to support Muslims and the practice of Islam on campus? No, I think there is a lot of work to be done there.”
                    </p>

                    <br />

                    <p>
                        The few accommodations that are provided to the MSA aren’t from administration yet other facilities on campus like the Kay Spiritual Life Center and AU Dining. They both went out of their way to provide Muslim students with food to break their fast at appropriate times. Additionally, other student organizations have been helping out the MSA by providing some of their own funding for Iftars.
                    </p>

                    <br />

                    <p>
                        The financial director of the MSA, Iffah Baig, praised student organizations like the Black Student Union and Students for Justice in Palestine (SJP) for being supportive during such an important time. “I love the student organizations on campus. They are literally uplifting us right now so thanks to them we were able to band together and have enough money and food but it wouldn't have been a problem if AU was kinda just more responsible or if they understood the significance of Ramadan in general.”
                    </p>

                    <br />

                    <p>
                        SJP is the sister club of the MSA and they have a lot of overlapping members and events. Muslims at AU already feel unsupported and unwelcomed by the environment on campus but this feeling has been heightened due to the Israel-Palestine war.
                    </p>

                    <br />

                    <p>
                        Osman said, “I think there has been a lot of push back for the way that our Muslims students are showing up for Palestine. There has been a lot of push back in that sense like people are saying things to them, filming them, getting uncomfortably close to them, harassing them, talking to them when they don’t necessarily wanna talk about it.”
                    </p>

                    <br />

                    <p>
                        She even said that there were several comments made about the MSA being funded by Hamas, which is untrue and extremely harmful. On top of that after the start of the war members within the MSA adopted a ‘buddy system’ where they would walk each other to and from class because they felt unsafe alone.
                    </p>

                    <br />

                    <p>
                        This insecurity stems from the lack of support Muslims receive from AU Admin. Osman and Baig both said that they wish the administration would, at the very least, issue a statement about islamophobia and the importance of keeping Muslim students safe.
                    </p>
                    <hr className="mt-8 border-t border-slate-300" />
                </div>
            </article>
        </div>
    );
};

export default Article1;
