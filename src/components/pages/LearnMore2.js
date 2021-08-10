import React from 'react';
import './LearnMore.css';
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function LearnMore2() {
    useEffect(() => {
        Aos.init({duration: 2000});
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

    return(
        <>
            <p className="learnmore-myth" onClick={() => setShow(!show)}>
                Depression isn't a real illness.
            </p>

            {
                show?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Many people mistakenly believe that depression is mere sadness or even a weakness of character. But in fact, depression is a complex mental health disorder. It has social, psychological, and biological origins, and it can be treated in a variety of ways.
                            <br/><br/>If you think you many be experiencing depression, don't write it off as normal. Instead, talk to your doctor. They can help you get the support you need to manage your condition.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow1(!show1)}>
                Antidepressants always cure depression.
            </p>

            {
                show1?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Depression is treatable. Among other interventions, your doctor may prescribe antidepressant medications. There drugs alter your brain chemistry. They can help address deep-rooted biological issues that may be contributing to your condition.
                            <br /><br />But for many people, antidepressants alone aren't enough. Your doctor may also recommend psychotherapy or talk therapy. Combining medications with talk therapy is a common treatment strategy.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow2(!show2)}>
                You can simply 'snap out of it.'
            </p>

            {
                show2?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            No one chooses to be depressed. Some people mistakenly believe that it happens when you allow yourself to wallow in your grief or sadness. They may think it can be cured with positive thoughts or a change in attitude.
                            <br /><br />In reality, depression isn't a sign of self-pity, weakness, or laziness. It's medical condition in which your brain chemistry, function, and structure are negatively affected by environmental or biological factors. If you suspect you're experiencing it, make an appointment with your doctor.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow3(!show3)}>
                It happens because of a sad situation.
            </p>

            {
                show3?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Everyone experiences sad thoughts or unhappiness sometimes. For example, you may feel upset following the death of a loved one or the end of a relationship. Events like these can raise your risk of depression. But depression isn't always caused by a negative incident.
                            <br /><br />Depression can cause unexplained periods of hopelessness, sadness, and lethargy. You may also experience suicidal tendencies. These episodes can last for prolonged periods. They may arise suddenly and inexplicably, even when things in your life seems to be going well.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow4(!show4)}>
                If your parents have depression, so will you.
            </p>

            {
                show4?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            If you have a history of depression in your family, you're more likely to develop it yourself, warns the Mayo Clinic. But experts aren't sure how significant genetics are in determining your risk of depression. Just because your parents or other family members have experienced it doesn't mean that you will too.
                            <br /><br />It's wise to be aware of your family history. But try not to worry too much about risk factors you can't control. Instead, focus on factors that you can manage. For example, avoid abusing alcohol or drugs to help lower your risk of depression.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow5(!show5)}>
                Antidepressants will change your personality.
            </p>

            {
                show5?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Antidepressants change your brain chemistry. This might seem scary. You might worry that you'll feel like an entirely different person when you're taking them.
                            <br /><br />It's helpful to recognize that antidepressants are designed to change only certain chemicals in your brain. They may help relieve your symptoms of depression without changing your underlying personality. After taking them, many people with depression begin to feel like themselves again. If you don't like how you feel white taking antidepressants, talk to your doctor about your treatment options.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow6(!show6)}>
                You'll have to be on antidepressants forever.
            </p>

            {
                show6?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Antidepressants provide a long-term treatment option for many people with depression. But the length of time that you're advised to take them can vary based on the severity of your condition and your prescribed treatment plan.
                            <br /><br />You may not need to take antidepressants for the rest of your life. In many cases, your doctor may prescribe psychotherapy along with medication. This therapy can help you learn new ways of coping with life challenges and may lessen your need for medication over time. In other cases, taking antidepressants for longer periods may be the best choice for you.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow7(!show7)}>
                Depression only affects women.
            </p>

            {
                show7?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            Due to social pressures, many men aren't comfortable discussing their feelings or asking for help. As a result, some people mistakenly believe that depression is a disease that only affects women.
                            <br /><br />That's simply untrue. Women more commonly report symptoms of depression, but it can affect men as well. In fact, it can have serious consequences for men. They're more likely to commit suicide than women. That's why it's so important to get help.
                        </p>
                    </div>
                    :null
            }

            <p className="learnmore-myth" onClick={() => setShow8(!show8)}>
                Talking about it only makes things worse.
            </p>

            {
                show8?
                    <div>
                        <p data-aos="fade-left" className="learnmore-reality">
                            It's a common misconception that discussing depression merely reinforces destructive feelings and keeps you focused on a negative experiences in life. But for many people, being along with your thoughts is much more harmful than hashing them out.
                            <br /><br />It may help to talk to a supportive, reliable, and non-judgemental listener about your feelings. Your loved ones may be willing to provide a sympathetic ear.But in many cases, a certified therapist is better equipped to provide the support you need.
                        </p>
                    </div>
                    :null
            }
        </>
    )
}

export default LearnMore2