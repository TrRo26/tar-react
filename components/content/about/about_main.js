import React from 'react'
import { Collapse } from 'react-bootstrap'
import AboutSkills from './skills.js'
import AboutEducation from './education.js'
import AboutExperience from './experience.js'

var AboutMain = React.createClass({
	getInitialState() {
		return(
			this.state = {}
		)
	},
	render() {
		var title = {
			textAlign: 'center',
			fontSize: 30
		}
		var container = {
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px',
      fontFamily: 'Nord Medium',
      fontSize: '16px',
      lineHeight: '175%',
    }
    var para = {
    	marginBottom: '25px'
    }
		return(
			<div>

				<h1 style={title}>ABOUT</h1>
			
				<div id='summary' style={container}>
					<p style={para}>As a result of several years of intense interest in the field of web development and a strong desire to build and create, I recently attended and graduated from the fully immersive web development program at DevBootcamp in Chicago. Working and studying approximately 60 hours per week, I had the opportunity to build numerous programs utilizing Ruby, Rails, HTML, CSS, JavaScript, JQuery, Sinatra, Xcode, Swift, SQL, and many other development tools.</p>
					<p style={para}>In addition to my current studies at DevBootcamp, I have recently earned a Master's of Science in International and Comparative Education as a result of my intense interest in culture, all things international and, of course, education. I am highly organized and pride myself on the ability to do just about anything and do it well.</p>
					<p style={para}>My past work with CCI Greenheart in the student exchange industry has provided me with invaluable people skills through day-to-day dealings with a multitude of international and domestic partners, employers and students alike. My formal education has afforded me valuable project management skills, an independent work ethic and an acute understanding of educational design and learning techniques.</p>
					<p style={para}>I have also been lucky enough to have had the chance to spend nearly half a year traveling throughout Western and Eastern Europe, a year and a half working and traveling in Australia and New Zealand, and two years studying and working in Sweden for graduate school. I am absolutely fascinated by different cultures and strongly believe that experiencing the differences those cultures have to offer is essential to a healthy perspective in todays world.</p>
				</div>

				<AboutSkills hue="200" saturation="50"/>
				<AboutEducation />
				<AboutExperience />

			</div>
		)
	}
})

export default AboutMain
