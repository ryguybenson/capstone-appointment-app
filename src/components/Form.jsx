import React from 'react';


function Form(){
  var form = {
    width: '85%',
    margin: 'auto',
    border: '1px solid black',
    padding: '2%',
    marginTop: '2%'
  };
  var buttons = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    postition: 'fixed',
    bottom: '5%',
    width: '50%',
    margin: 'auto',
    marginTop: '1%'
  };
  return (d
    <div>
      <form style={form}>
        <div>
          <p>How do you plan on enjoying your portraits (you may change your mind at anytime, it just gives me a better idea of what types of images to create for you)?</p>
          <input placeholder='Text'/>
        </div>
        <div>
          <p>Describe your personality in as many adjectives as are fitting (shy, fun, outgoing, athletic, girly girl, guys guy, jokester, laid back, studious, sweet, obnoxious, loud, nature lover, urban, introvert, extrovert, home body, rule follower, adventurous, etc...)</p>
          <input placeholder='Text'/>
        </div>
        <div>
          <p>Please let me know your preferred locations fot the shoot or what type of location/background you would like (urban, river, meadow, trees, brick wall, your yard, sports field, your school, barn, junk yard, bridge, etc...)</p>
          <input placeholder='Text'/>
        </div>
        <div>
          <p>Please provide a brief description of the outfits you'll be wearing. A couple things to leep in mind when selecting yout outfits:
            <br/>
            *Select outfits that you're comfortable in; you dont want to be worrying about straps that won't stay in place or other wardrobe issues.
            <br/>
            *Select clothes that best reflect your personality and dont forget accessories!
          </p>
          <input placeholder='Text'/>
        </div>
        <div>
          <p>Will you be bringing any props with you (sports equipment, and instrument, books, a pet, family or friends, etc...)</p>
          <input placeholder='Text'/>
        </div>
        <div>
          <p>Please describe or attach pics of poses that you love and share any other thoughts and desires you have for your shoot</p>
          <input placeholder='Text'/>
        </div>
      </form>
      <div style={buttons}>
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Form;