import React from 'react';


function Form(){
  return (
    <form>
      <div>
        <p>How do you plan on enjoying your portraits (you may change your mind at anytime, it just gives me a better idea of what types of images to create for you)?</p>
        <input placeolder='Text'/>
      </div>
      <div>
        <p>Describe your personality in as many adjectives as are fitting (shy, fun, outgoing, athletic, girly girl, guys guy, jokester, laid back, studious, sweet, obnoxious, loud, nature lover, urban, introvert, extrovert, home body, rule follower, adventurous, etc...)</p>
        <input placeolder='Text'/>
      </div>
      <div>
        <p>Please let me know your preferred locations fot the shoot or what type of location/background you would like (urban, river, meadow, trees, brick wall, your yard, sports field, your school, barn, junk yard, bridge, etc...)</p>
        <input placeolder='Text'/>
      </div>
      <div>
        <p>Please provide a brief description of the outfits you'll be wearing. A couple things to leep in mind when selecting yout outfits:
        <br/>
          *Select outfits that you're comfortable in; you dont want to be worrying about straps that won't stay in place or other wardrobe issues.
          <br/>
          *Select clothes that best reflect your personality and dont forget accessories!
          </p>
        <input placeolder='Text'/>
      </div>
      <div>
        <p>Will you be bringing any props with you (sports equipment, and instrument, books, a pet, family or friends, etc...)</p>
        <input placeolder='Text'/>
      </div>
      <div>
        <p>Please describe ora ttach pics of poses that you love and share any ohter thoughts and desires you have for your shoot</p>
        <input placeolder='Text'/>
      </div>
    </form>
  );
}

export default Form;