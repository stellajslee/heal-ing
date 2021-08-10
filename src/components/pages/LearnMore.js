import React from 'react';
import './LearnMore.css';
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function LearnMore() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);

    return(
        <>
            <p className="learnmore-myth" onClick={() => setShow(!show)}>
                Snap a rubber band on your wrist every time you have a bad thought.
            </p>

            {
                show?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Studies show that suppressing your thoughts makes them stronger and more frequent. Think of it this way, the thoughts you resist persist.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow1(!show1)}>
                If a panic attack gets too bad, you can pass out or lose control.
            </p>

            {
                show1?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            It's unlikely you will faint, which is caused by a sudden drop in blood pressure. During a panic attack, your pressure does not fall; it actually rises slightly.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow2(!show2)}>
                If you have an anxiety disorder, it is important to avoid stress and situations that make you feel "stressed."
            </p>

            {
                show2?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Treating yourself as if you are fragile and avoiding risk leads to feeling demoralized. Avoiding anxiety tends to reinforce it. You can be anxious and still do whatever you have to do.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow3(!show3)}>
                Always carry a paper bag in case you hyperventilate.
            </p>

            {
                show3?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Paper bags can serve as safety crutches that keep you anxious about being anxious. Hyperventilation, while uncomfortable, is not dangerous.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow4(!show4)}>
                Causes of anxiety disorders are usually rooted in childhood, so effective therapy must focus on that time period.
            </p>

            {
                show4?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Research shows that effective treatment focuses on the here and now, including new skills to manage thoughts, emotions, discomforts, and behaviour.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow5(!show5)}>
                Medications for anxiety are addictive, so they should be taken only if absolutely necessary.
            </p>

            {
                show5?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            SSRI and SNRI antidepressants are not addictive. Benzodiazepines might be helpful in the short term, but they can lead to increased tolerance and dependence after long-term use.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow6(!show6)}>
                Medication is the only treatment for anxiety disorders.
            </p>

            {
                show6?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                           Medication can be effective, but scientific research shows that cognitive-behavioural therapy (CBT) may be just as or more effective than medication (or a combination of CBT and medication) for most people, especially in the long run.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow7(!show7)}>
                Some people are just worrywarts or neurotic, and there is nothing that can really make any difference.
            </p>

            {
                show7?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Therapy can help you reduce worry and suffering and learn a different relationship to your temperament and how long neurotic habits have been in your life.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow8(!show8)}>
                If you eat right, exercise, avoid caffeine, and live a healthy lifestyle, your anxiety will go away.
            </p>

            {
                show8?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            While some of your anxiety might go away, your disorder won't be cured. Anxiety disorders are certainly sensitive to stress, but stress does not cause them.
                            <br /><br />You need more help than just reducing your stress. You may need to face your fears, learn new facts about your symptoms, stop avoiding, learn tolerance for some experiences, or change how you think, feel, and behave with respect to other people.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow9(!show9)}>
                A never-ending supply of compassionate reassurance from family and friends and assistance in avoiding stress are good for someone with anxiety problems.
            </p>

            {
                show9?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Well-meaning friends/family can inadvertently get caught up in reassurance compulsions and also help maintain fears by keeping you from facing them. Compassionate and kindly encouragement to move through anxiety and doubts, instead of avoiding them, is more helpful.
                        </p>
                    </div>
                    :null
            }
        </>
    )
}

export default LearnMore