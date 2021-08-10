import React, { useEffect } from 'react';
import './Learn.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './Learn.css';
import LearnMore from "./LearnMore";
import LearnMore2 from "./LearnMore2";

function Learn() {
    useEffect(() => {
        Aos.init({duration: 2500});
    }, []);
        return (
            <>
                <div className="container">
                    <div data-aos="fade-right">
                        <p className="space-2" />
                        <a className="anchor" id="introduction"></a>
                        <h2 className="learn-header">"Mental health is just as important as physical health."</h2>
                        <p className="learn-text">
                            According to the World Health Organizations (WHO),
                            mental health is a state of well-being in which an individual realizes their own abilities,
                            can cope with the normal stresses of life, can work productively, and is able to make a contribution to their community.
                            <br /><br />It affects our thoughts, feelings, and actions. It helps determine how we handle stress, relate to others, and make healthy choices.
                            Looking after your mental health is paramount in pursuing a healthy lifestyle,
                            though it is often overlooked by exercises and diet for such goals.
                            It is more than okay to focus on taking care of your mental well-being in whichever way that helps you
                            as mental health has an impact on every element of your life.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <a className="anchor" id="statistics"></a>
                        <h2 className="learn-header">5 Statistics – You are not alone.</h2>
                        <p className="learn-text">
                            1. There has been a 13% rise in mental health conditions and substance use disorders in the last decade (to 2017), according to WHO.
                            <br /><br />2. Around 20% of the world’s children and adolescents have a mental health condition, according to WHO.
                            <br /><br />3. In any given year, 1 in 5 people in Canada will personally experience a mental health problem or illness, according to Canadian Mental Health Association (CMHA).
                            <br /><br />4. By age 40, about 50% of the population will have or have had a mental illness, according to CMHA.
                            <br /><br />5. Approximately 8% of adults will experience major depression at some time in their lives, according to CMHA.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <a className="anchor" id="anxiety-disorders"></a>
                        <h2 className="learn-header">Anxiety Disorders</h2>
                        <p className="learn-text">
                            Anxiety disorders are one of the most common mental health conditions.
                            <br /><br />They include phobias, panic disorder, agoraphobia, social anxiety disorder, and generalized anxiety disorder (GAD).
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader" id="test">Phobias</h3>
                        <p className="learn-subtext">
                            A phobia is an intense fear around a specific thing like an object, animal, or situation.
                            Most of us are scared of something, but these feelings don’t disrupt our lives.
                            With phobias, people change the way they live in order to avoid the feared object or situation.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Panic Disorder</h3>
                        <p className="learn-subtext">
                            Panic disorder involves repeated and unexpected panic attacks. A panic attack is a feeling of sudden and intense fear that lasts for a short period of time. It causes a lot of physical feelings like a racing heart, shortness of breath, or nausea. Panic attacks can be a normal reaction to a stressful situation, or a part of other anxiety disorders. With panic disorder, panic attacks seem to happen for no reason. People who experience panic disorder fear more panic attacks and may worry that something bad will happen as a result of the panic attack. Some people change their routine to avoid triggering more panic attacks.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Agoraphobia</h3>
                        <p className="learn-subtext">
                            Agoraphobia is fear of being in a situation where a person can’t escape or find help if they experience a panic attack or other feelings of anxiety. A person with agoraphobia may avoid public places or even avoid leaving their homes.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Social Anxiety Disorder</h3>
                        <p className="learn-subtext">
                            Social anxiety disorder involves intense fear of being embarrassed or evaluated negatively by others. As a result, people avoid social situations. This is more than shyness. It can have a big impact on work or school performance and relationships.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Generalized Anxiety Disorder</h3>
                        <p className="learn-subtext">
                            Generalized anxiety disorder is excessive worry around a number of everyday problems for more than six months. This anxiety is often far greater than expected—for example, intense anxiety over a minor concern. Many people experience physical symptoms too, including muscle tension and sleep problems.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Others</h3>
                        <p className="learn-subtext">
                            Some mental illnesses are no longer classified as anxiety disorders, though anxiety or fear is a major part of the illnesses.
                            <br /><br />
                            Obsessive-compulsive disorder (OCD) is made up of unwanted thoughts, images, or urges that cause anxiety (obsessions) or repeated actions meant to reduce that anxiety (compulsions). Obsessions or compulsions usually take a lot of time and cause a lot of distress.
                            <br /><br />
                            Post-traumatic stress disorder (PTSD) can occur after a very scary or traumatic event, such as abuse, an accident, or a natural disaster. Symptoms of PTSD include reliving the event through nightmares or flashbacks, avoiding reminders of the traumatic event, and feeling unsafe in the world, even when a person isn’t in danger.
                        </p>

                        <a className="source" href="https://cmha.ca/mental-health/understanding-mental-illness/anxiety-disorders">Source: Canadian Mental Health Association (CMHA)</a>

                    </div>

                    <div data-aos="fade-right">
                        <h2 className="learn-subheader">Causes</h2>
                        <p className="learn-subtext">
                            Scientists believe that many factors combine to cause anxiety disorders.
                            <br />
                            <p className="learn-small-header">
                                Genetics
                            </p>
                            Studies support the evidence that anxiety disorders “run in families,” as some families have a higher-than-average amount of anxiety disorders among relatives.
                            <br />
                            <p className="learn-small-header">
                                Environment
                            </p>
                            A stressful or traumatic event such as abuse, death of a loved one, violence or prolonged illness is often linked to the development of an anxiety disorder.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h2 className="learn-subheader">Symptoms</h2>
                        <p className="learn-subtext">
                            Anxiety disorders are a group of related conditions, each having unique symptoms. However, all anxiety disorders have one thing in common: persistent, excessive fear or worry in situations that are not threatening. People typically experience one or more of the following symptoms:
                            <br />
                            <p className="learn-small-header">Emotional symptoms</p>
                            - Feelings of apprehension or dread <br />
                            - Feeling tense or jumpy <br />
                            - Restlessness or irritability <br />
                            - Anticipating the worst and being watchful for signs of danger
                            <p className="learn-small-header">Physical symptoms</p>
                            - Pounding or racing heart and shortness of breath <br />
                            - Sweating, tremors and twitches <br />
                            - Headaches, fatigue and insomnia <br />
                            - Upset stomach, frequent urination or diarrhea <br />
                        </p>

                        <a className="source-sp" href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders">Source: National Alliance on Mental Health (NAMI)</a>
                    </div>

                    <div data-aos="fade-right">
                        <a className="anchor" id="self-help-anxiety"></a>
                        <h2 className="learn-header">Self-help for Anxiety</h2>
                        <h3 className="learn-subheader">Connect with others.</h3>
                        <p className="learn-subtext">
                            Loneliness and isolation can trigger or worsen anxiety, while talking about your worries face to face can often make them seem less overwhelming. Make it a point to regularly meet up with friends, join a self-help or support group, or share your worries and concerns with a trusted loved one. If you don’t have anyone you can reach out to, it’s never too late to build new friendships and a support network.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Manage stress.</h3>
                        <p className="learn-subtext">
                            If your stress levels are through the roof, stress management can help. Look at your responsibilities and see if there are any you can give up, turn down, or delegate to others.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Practice relaxation techniques.</h3>
                        <p className="learn-subtext">
                            When practiced regularly relaxation techniques such as mindfulness meditation, progressive muscle relaxation, and deep breathing can reduce anxiety symptoms and increase feelings of relaxation and emotional well-being.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Exercise regularly.</h3>
                        <p className="learn-subtext">
                            Exercise is a natural stress buster and anxiety reliever. To achieve the maximum benefit, aim for at least 30 minutes of aerobic exercise on most days (broken up into short periods if that’s easier). Rhythmic activities that require moving both your arms and legs are especially effective. Try walking, running, swimming, martial arts, or dancing.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Get enough sleep.</h3>
                        <p className="learn-subtext">
                            A lack of sleep can exacerbate anxious thoughts and feelings, so try to get seven to nine hours of quality sleep a night.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Be smart about caffeine, alcohol, and nicotine.</h3>
                        <p className="learn-subtext">
                            Caffeine and alcohol can make anxiety worse. And while it may seem like cigarettes are calming, nicotine is actually a powerful stimulant that leads to higher, not lower, levels of anxiety.
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Put a stop to chronic worrying.</h3>
                        <p className="learn-subtext">
                            Worrying is a mental habit you can learn how to break. Strategies such as creating a worry period, challenging anxious thoughts, and learning to accept uncertainty can significantly reduce worry and calm your anxious thoughts.
                        </p>

                        <a className="source-sp" href="https://www.helpguide.org/articles/anxiety/anxiety-disorders-and-anxiety-attacks.htm">Source: HelpGuide</a>
                    </div>

                    <div data-aos="fade-right">
                        <a className="anchor" id="depression"></a>
                        <h2 className="learn-header">Depression</h2>

                        <p className="learn-text">
                            Depression is another one of the most common mental health conditions.
                            <br /><br />Depression is a mental illness that affects a person’s mood—the way a person feels. Mood impacts the way people think about themselves, relate to others, and interact with the world around them. This is more than a ‘bad day’ or ‘feeling blue.’ Without supports like treatment, depression can last for a long time.
                            <br /><br />Signs of depression include feeling sad, worthless, hopeless, guilty, or anxious a lot of the time. Some feel irritable or angry. People lose interest in things they used to enjoy and may withdraw from others. Depression can make it hard to focus on tasks and remember information. It can be hard to concentrate, learn new things, or make decisions. Depression can change the way people eat and sleep, and many people experience physical health problems.
                        </p>

                        <a className="source-1" href="https://cmha.ca/documents/depression-and-bipolar-disorder">Source: Canadian Mental Health Association (CMHA)</a>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Symptoms</h3>
                        <p className="learn-subtext">
                            Depression can present different symptoms, depending on the person. But for most people, depressive disorder changes how they function day-to-day, and typically for more than two weeks.
                            <p className="learn-small-header">Common symptoms include:</p>
                            <br />
                            - Changes in sleep<br />
                            - Changes in appetite<br />
                            - Lack of concentration<br />
                            - Loss of energy<br />
                            - Lack of interest in activities<br />
                            - Hopelessness or guilty thoughts<br />
                            - Changes in movement (less activity or agitation)<br />
                            - Physical aches and pains<br />
                            - Suicidal thoughts
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <h3 className="learn-subheader">Causes</h3>
                        <p className="learn-subtext">
                            Depression does not have a single cause. It can be triggered by a life crisis, physical illness or something else—but it can also occur spontaneously. Scientists believe several factors can contribute to depression:
                            <p className="learn-small-header">Trauma</p>
                            <p className="learn-text">When people experience trauma at an early age, it can cause long-term changes in how their brains respond to fear and stress. These changes may lead to depression.</p>
                            <p className="learn-small-header">Genetics</p>
                            <p className="learn-text">
                                Mood disorders, such as depression, tend to run in families.
                            </p>
                            <p className="learn-small-header">Life Circumstances</p>
                            <p className="learn-text">
                                Marital status, relationship changes, financial standing and where a person lives influence whether a person develops depression.
                            </p>
                            <p className="learn-small-header">Brain Changes</p>
                            <p className="learn-text">
                                Imaging studies have shown that the frontal lobe of the brain becomes less active when a person is depressed. Depression is also associated with changes in how the pituitary gland and hypothalamus respond to hormone stimulation.
                            </p>
                            <p className="learn-small-header">Other Medical Conditions</p>
                            <p className="learn-text">
                                People who have a history of sleep disturbances, medical illness, chronic pain, anxiety and attention-deficit hyperactivity disorder (ADHD) are more likely to develop depression. Some medical syndromes (like hypothyroidism) can mimic depressive disorder. Some medications can also cause symptoms of depression.
                            </p>
                            <p className="learn-small-header">Drug and Alcohol Misuse</p>
                            <p className="learn-text">
                                21% of adults with a substance use disorder also experienced a major depressive episode in 2018. Co-occurring disorders require coordinated treatment for both conditions, as alcohol can worsen depressive symptoms.
                            </p>
                        </p>
                    </div>

                    <div data-aos="fade-right">
                        <a className="anchor" id="self-help-depression"></a>
                        <h3 className="learn-header">Self-help for Depression</h3>

                        <p className="learn-subheader">Reach out and stay connected</p>
                        <p className="learn-subtext">
                            <p className="learn-small-header">Look for support from people who make you feel safe and cared for.</p>
                            <p className="learn-text">The person you talk to doesn’t have to be able to fix you; they just need to be a good listener—someone who’ll listen attentively and compassionately without being distracted or judging you.</p>
                            <p className="learn-small-header">
                                Make face-time a priority.
                            </p>
                            <p className="learn-text">
                                Phone calls, social media, and texting are great ways to stay in touch, but they don’t replace good old-fashioned in-person quality time. The simple act of talking to someone face to face about how you feel can play a big role in relieving depression and keeping it away.
                            </p>
                            <p className="learn-small-header">
                                Try to keep up with social activities even if you don’t feel like it.
                            </p>
                            <p className="learn-text">
                                Often when you’re depressed, it feels more comfortable to retreat into your shell, but being around other people will make you feel less depressed.
                            </p>
                            <p className="learn-small-header">
                                Find ways to support others.
                            </p>
                            <p className="learn-text">
                                It’s nice to receive support, but research shows you get an even bigger mood boost from providing support yourself. So find ways—both big and small—to help others: volunteer, be a listening ear for a friend, do something nice for somebody.
                            </p>
                            <p className="learn-small-header">
                                Care for a pet.
                            </p>
                            <p className="learn-text">
                                While nothing can replace the human connection, pets can bring joy and companionship into your life and help you feel less isolated. Caring for a pet can also get you outside of yourself and give you a sense of being needed—both powerful antidotes to depression.
                            </p>
                            <p className="learn-small-header">
                                Join a support group for depression.
                            </p>
                            <p className="learn-text">
                                Being with others dealing with depression can go a long way in reducing your sense of isolation. You can also encourage each other, give and receive advice on how to cope, and share your experiences.
                            </p>
                        </p>
                    </div>
                    <p>
                        <div data-aos="fade-right">
                            <p className="learn-subheader">Do things that make you feel good</p>
                            <p className="learn-subtext">
                                <p className="learn-text">
                                    In order to overcome depression, you have to do things that relax and energize you. This includes following a healthy lifestyle, learning how to better manage stress, setting limits on what you’re able to do, and scheduling fun activities into your day.
                                </p>
                                <p className="learn-small-header">Do things you enjoy (or used to).</p>
                                <p className="learn-text">
                                    While you can’t force yourself to have fun or experience pleasure, you can push yourself to do things, even when you don’t feel like it. You might be surprised at how much better you feel once you’re out in the world. Even if your depression doesn’t lift immediately, you’ll gradually feel more upbeat and energetic as you make time for fun activities.
                                    Pick up a former hobby or a sport you used to like. Express yourself creatively through music, art, or writing. Go out with friends. Take a day trip to a museum, the mountains, or the ballpark.
                                </p>
                                <p className="learn-small-header">Aim for eight hours of sleep.</p>
                                <p className="learn-text">
                                    Depression typically involves sleep problems; whether you’re sleeping too little or too much, your mood suffers.
                                </p>
                                <p className="learn-small-header">Keep stress in check.</p>
                                <p className="learn-text">
                                    Not only does stress prolong and worsen depression, but it can also trigger it. Figure out all the things in your life that stress you out, such as work overload, money problems, or unsupportive relationships, and find ways to relieve the pressure and regain control.
                                </p>
                                <p className="learn-small-header">Practice relaxation techniques.</p>
                                <p className="learn-text">
                                    A daily relaxation practice can help relieve symptoms of depression, reduce stress, and boost feelings of joy and well-being. Try yoga, deep breathing, progressive muscle relaxation, or meditation.
                                </p>
                                <p className="learn-small-header">Develop a “wellness toolbox” to deal with depression.</p>
                                <p className="learn-text">
                                    Come up with a list of things that you can do for a quick mood boost. The more “tools” for coping with depression you have, the better. Try and implement a few of these ideas each day, even if you’re feeling good.
                                </p>
                            </p>
                        </div>

                        <div data-aos="fade-right">
                            <p className="learn-subheader">Get moving</p>
                            <p className="learn-subtext">
                                When you’re depressed, just getting out of bed can seem like a daunting task, let alone working out! But exercise is a powerful depression fighter — and one of the most important tools in your recovery arsenal. Research shows that regular exercise can be as effective as medication for relieving depression symptoms. It also helps prevent relapse once you’re well.
                                To get the most benefit, aim for at least 30 minutes of exercise per day. This doesn’t have to be all at once—and it’s okay to start small. A 10-minute walk can improve your mood for two hours.
                                <br /><br />Exercise is something you can do right now to boost your mood!
                            </p>
                        </div>

                        <div data-aos="fade-right">
                            <p className="learn-subheader">Eat a healthy, depression-fighting diet</p>
                            <p className="learn-subtext">
                                What you eat has a direct impact on the way you feel. Reduce your intake of foods that can adversely affect your brain and mood, such as caffeine, alcohol, trans fats, and foods with high levels of chemical preservatives or hormones (such as certain meats).
                                <p className="learn-small-header">Don’t skip meals.</p>
                                <p className="learn-text">
                                    Going too long between meals can make you feel irritable and tired, so aim to eat something at least every three to four hours.
                                </p>
                                <p className="learn-small-header">Minimize sugar and refined carbs.</p>
                                <p className="learn-text">
                                    You may crave sugary snacks, baked goods, or comfort foods such as pasta or French fries, but these “feel-good” foods quickly lead to a crash in mood and energy. Aim to cut out as much of these foods as possible.
                                </p>
                                <p className="learn-small-header">Boost your B vitamins.</p>
                                <p className="learn-text">
                                    Deficiencies in B vitamins such as folic acid and B-12 can trigger depression. To get more, take a B-complex vitamin supplement or eat more citrus fruit, leafy greens, beans, chicken, and eggs.
                                </p>
                                <p className="learn-small-header">Boost your mood with foods rich in omega-3 fatty acids.</p>
                                <p className="learn-text">
                                    Omega-3 fatty acids play an essential role in stabilizing mood. The best sources are fatty fish such as salmon, herring, mackerel, anchovies, sardines, tuna, and some cold-water fish oil supplements.
                                </p>
                            </p>
                        </div>

                        <div data-aos="fade-right">
                            <p className="learn-subheader">Get a daily dose of sunlight</p>
                            <p className="learn-subtext">
                                Sunlight can help boost serotonin levels and improve your mood. Whenever possible, get outside during daylight hours and expose yourself to the sun for at least 15 minutes a day. Remove sunglasses (but never stare directly at the sun) and use sunscreen as needed.
                                <br /><br />Take a walk on your lunch break, have your coffee outside, enjoy an al fresco meal, or spend time gardening.
                                <br />Double up on the benefits of sunlight by exercising outside. Try hiking, walking in a local park, or playing golf or tennis with a friend.
                                <br />Increase the amount of natural light in your home and workplace by opening blinds and drapes and sitting near windows.
                                <br />If you live somewhere with little winter sunshine, try using a light therapy box.
                            </p>
                        </div>
                    </p>

                    <div data-aos="fade-right">
                        <div className="warning">
                            <p className="learn-subheader">When to get professional help for depression</p>
                            <p className="learn-subtext">
                                If you’ve taken self-help steps and made positive lifestyle changes and still find your depression getting worse, seek professional help. Needing additional help doesn’t mean you’re weak. Sometimes the negative thinking in depression can make you feel like you’re a lost cause, but depression can be treated and you can feel better!
                                Don’t forget about these self-help tips, though. Even if you’re receiving professional help, these tips can be part of your treatment plan, speeding your recovery and preventing depression from returning.
                            </p>
                        </div>

                        <a className="source-1" href="https://www.helpguide.org/articles/depression/coping-with-depression.htm">Source: HelpGuide</a>
                    </div>

                    <div>
                        <a className="anchor" id="common-mr-anxiety"></a>
                        <h1 className="learn-header">Common Myths & Realities — Anxiety Disorders</h1>
                        <h2 className="learnmore-subheader">Click on the myths to see the realities.</h2>

                        <div className="container2">
                            <LearnMore></LearnMore>
                        </div>

                        <a className="source-2" href="https://adaa.org/understanding-anxiety/generalized-anxiety-disorder-gad/myths-realities">Source: Anxiety & Depression Association of America (ADAA)</a>
                    </div>

                    <div>
                        <a className="anchor" id="common-mr-depression"></a>
                        <h1 className="learn-header">Common Myths & Realities — Depression</h1>
                        <h2 className="learnmore-subheader">Click on the myths to see the realities.</h2>

                        <div className="container2">
                            <LearnMore2></LearnMore2>
                        </div>

                        <a className="source-2" href="https://www.healthline.com/health/9-myths-depression">Source: Healthline</a>
                    </div>

                    <p className="space" />

                </div>
            </>
        )
}

export default Learn