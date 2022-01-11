function About() {
        const aboutStyle = {
            backgroundImage: `url("https://wallpaperaccess.com/full/187161.jpg")` ,
            height:'90vh',
            marginTop:'-26.5px',
            fontSize:'20px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }
          const font={
              color: 'white'
          }
        return (
            <div style={aboutStyle}>
                <h1 style={font}><u>Welcome to About Us Page.</u></h1>
            </div>
         );
}
 
export default About;