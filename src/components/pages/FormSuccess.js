import React from 'react';
import './Form.css';

const FormSuccess = () => {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <div className='form-success-container'>
                <h1 className='form-success'>
                    hi there, whoever you are, i'm so proud of you for letting it go.
                    <br /> i hope this website helped you on your journey a little bit.
                    <br /> please know that you deserve happiness, love, and a magical life.
                </h1>
                <h1 className='form-success-1'>
                    healing doesn't mean the damage never existed.
                    <br /> it means the damage no longer control our lives.
                    <br /><br /> — akshay dubey
                </h1>
                <div className='form-success-more'>
                    <div>
                        <h2 className='form-success-2'>podcasts that might help</h2>
                        <p className='form-success-contents'>Let's Talk About Mental Health by Jeremy Godwin</p>
                        <a className='help' href='https://letstalkaboutmentalhealth.com.au/'>check it out</a>

                        <p className='form-success-contents'>Mental — The Podcast to Destigmatize Mental Health</p>
                        <a className='help' href='https://www.mentalpodcast.co.uk/'>check it out</a>

                        <p className='form-success-contents'>The Anxiety Podcast by Tim JP Collins</p>
                        <a className='help' href='https://podcasts.apple.com/ca/podcast/the-anxiety-podcast/id1031117023'>check it out</a>

                        <p className='form-success-contents'>The Hilarious World of Depression</p>
                        <a className='help' href='https://www.hilariousworld.org/'>check it out</a>

                        <p className='form-success-contents'>Mental Illness Happy Hour</p>
                        <a className='help' href='https://mentalpod.com/'>check it out</a>

                        <p className='form-success-contents'>Terrible, Thanks for Asking</p>
                        <a className='help' href='https://www.ttfa.org/'>check it out</a>

                        <p className='form-success-contents'>Ten Percent Happier With Dan Harris</p>
                        <a className='help' href='https://www.tenpercent.com/podcast'>check it out</a>

                        <p className='form-success-contents'>Bryony Gordon's Mad World</p>
                        <a className='help' href='https://podcasts.apple.com/gb/podcast/bryony-gordons-mad-world/id1224672811'>check it out</a>
                    </div>
                    <div>
                        <h2 className='form-success-2'>meditations that might help</h2>
                        <p className='form-success-contents'>10 Minute Meditation For Anxiety</p>
                        <a className='help' href='https://www.youtube.com/watch?v=O-6f5wQXSu8'>try it out</a>

                        <p className='form-success-contents'>10 Minute Meditation For Depression</p>
                        <a className='help' href='https://www.youtube.com/watch?v=xRxT9cOKiM8'>try it out</a>

                        <p className='form-success-contents'>10 Minute Meditation For Healing</p>
                        <a className='help' href='https://www.youtube.com/watch?v=2FGR-OspxsU'>try it out</a>

                        <p className='form-success-contents'>15 Minute Meditation For Self Love</p>
                        <a className='help' href='https://www.youtube.com/watch?v=itZMM5gCboo'>try it out</a>

                        <p className='form-success-contents'>A Ten Minute Guided Meditation to Clear Your Mind</p>
                        <a className='help' href='https://www.youtube.com/watch?v=ez3GgRqhNvA'>try it out</a>

                        <p className='form-success-contents'>Meditation For Mental Balance and Grounding</p>
                        <a className='help' href='https://www.youtube.com/watch?v=x0nZ1ZLephQ'>try it out</a>

                        <p className='form-success-contents'>Guided Meditation for Detachment From Overthinking</p>
                        <a className='help' href='https://www.youtube.com/watch?v=1vx8iUvfyCY'>try it out</a>
                    </div>
                    <div>
                        <h2 className='form-success-2'>movies that might help</h2>
                        <p className='form-success-contents'>It's Kind of a Funny Story</p>
                        <a className='help' href='https://www.imdb.com/title/tt0804497/'>take a look</a>

                        <p className='form-success-contents'>Cake</p>
                        <a className='help' href='https://www.imdb.com/title/tt3442006/'>take a look</a>

                        <p className='form-success-contents'>The Perks of Being a Wallflower</p>
                        <a className='help' href='https://www.imdb.com/title/tt1659337/'>take a look</a>

                        <p className='form-success-contents'>Silver Linings Playbook</p>
                        <a className='help' href='https://www.imdb.com/title/tt1045658/'>take a look</a>

                        <p className='form-success-contents'>Little Miss Sunshine</p>
                        <a className='help' href='https://www.imdb.com/title/tt0449059/'>take a look</a>

                        <p className='form-success-contents'>Good Will Hunting</p>
                        <a className='help' href='https://www.imdb.com/title/tt0119217/'>take a look</a>

                        <p className='form-success-contents'>Life Of Pi</p>
                        <a className='help' href='https://www.imdb.com/title/tt0454876/'>take a look</a>

                        <p className='form-success-contents'>Begin Again</p>
                        <a className='help' href='https://www.imdb.com/title/tt1980929/'>take a look</a>
                    </div>
                </div>
                <div className="vent-more">
                    <button className="button-more" onClick={refreshPage}>want to vent some more?</button>
                </div>
            </div>
        </>
    );
};

export default FormSuccess;