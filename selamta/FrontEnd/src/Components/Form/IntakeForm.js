import React, { Component } from 'react';
import './IntakeForm.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ReactSingleDropdown from 'react-single-dropdown'
import 'react-datepicker/dist/react-datepicker.css';

class IntakeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

    onDropdownSelect = (value) => {
      console.log('Selected value=', value)
    }

  render() {
    return (
      <div className="Form">
        <header className="App-header">
          <h1 className="App-title">Welcome to Selamta</h1>
          <h3>Please enter patient information below.</h3>
        </header>
        <div className="App-intro">
        <h1>Demographic Interview</h1>
          Please select gender:
          <form>
            <input type="radio" name="gender" value="male" />Male
            <input type="radio" name="gender" value="female" />Female
          </form> <br />
          Please select sex:
          <form>
            <input type="radio" name="sex" value="male" />Male
            <input type="radio" name="sex" value="female" />Female
            <input type="radio" name="sex" value="other" />Other
            <input type="radio" name="sex" value="transgender" />Transgender
            <input type="radio" name="sex" value="missing" />Missing/Unknown
          </form> <br />
          Please enter Date of Birth:
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
          <div className="centered-dropdown">
            How did you find out about this program?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Self','2-Social Service Source','3-Legal Source', '4-Medical Source', '5-Mental Health Source', '6-Human Rights Source', '7-Family/Friend', '8-Client', '9-Dont know', '10-Refused']}
              width='300'/>
          </div> <br />
          What is your country of origin?
          <form>
            <label>
              Country Name:
              <input type="text" name="Country Name" />
            </label>
            <input type="submit" value="Submit" />
          </form><br />
          <div class="center-div"><br />
            When did you first leave your home country to seek refuge/asylum in another country?
            <form>
              <label>
              Date Left:
              <input type="text" name="Date Left" />
              </label>
              <input type="submit" value="Submit" />
            </form><br />
            <div className="centered-dropdown">
              With whom did you leave? <br />
              <ReactSingleDropdown
                defaultSelected = 'Choose from the following'
                onSelect={this.onDropdownSelect}
                noAnimation
                options={['1- Alone','2-Friend','3-Smuggler', '4-Spouse', '5-Children', '6-Siblings', '7-Parents', '8-Other Family Member(s)', '9-Colleague', '10-Other']}
                width='300'
              />
            </div>
          </div><br />
          In what other countries have you resided? For how long? <br />
          <label>
            Country Name:
            <input type="text" name="Country Name" />
          </label>
          <label>
            Number of Days:
            <input type="text" name="Country Name" />
          </label> <br />
          Enter 66666666= N/A, 77777777= Don’t know, 88888888= Refused, 99999999= Missing
          </div>
            In what countries were you persectuted? <br />
            <label>
              Country Name:
              <input type="text" name="Country Name" /> REFER TO CODEBOOK
            </label>
            <label> <br />
              Country Name:
              <input type="text" name="Country Name" /> REFER TO CODEBOOK
            </label>
            <label> <br />
              Country Name:
              <input type="text" name="Country Name" /> REFER TO CODEBOOK
            </label> <br /> <br />
            When did you first arrive in the US?
            <form>
              <label>
                Arrival Date:
                <input type="text" name="Date Left" />
              </label>
              <input type="submit" value="Submit" />
            </form><br />
          Which of the following best describes your current immigration status? <br />
          ***TO DO--NOT SURE WHAT TO PUT HERE <br />
          <div className="centered-dropdown">
            What is your religious affiliation?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Bhuddist','2-Jain','3-Confucian', '4-Hindu', '5-Sikh', '6-Bahai', '7-Shinto', '8-Taoist', '9-Zoroastrian', '10-Christian', '11-Jew', '12-Muslim', '13-Agnostic', '14-Other']}
              width='300'
              />
          </div>
          Do you belong to a specific ethnic group?
          <form>
            <input type="radio" name="binary" value="yes" />Yes
            <input type="radio" name="binary" value="no" />No
          </form> <br />
          <label>
            If "yes", then classify using HURIDOCS Codebook: <br></br>
            <input type="text" name="Ethnic Group" />
          </label> <br></br>
          <div className="centered-dropdown">
            What is the highest grade or year of school you completed? <br></br>
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1','2','3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17+']}
              width='300'/>
          </div>
          <label>
            Degree (Please specify):
            <input type="text" name="Degree" />
          </label>
          <label> <br />
            Vocational apprenticeship or Professional Certificate (Please specify):
            <input type="text" name="Degree" />
          </label> <br /> <br />
          What kinds of educational programs or classes are you involved in currently? <br />
          *Need to put a checkbox HERE
          <br /> <br />
          <div className="centered-dropdown">
            Are you currently married or living with someone as though you were married? Or,
            are you widowed, separated, divorced or have you never been married?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Married','Widowed','Seperated', 'Divorced', 'Never Married']}
              width='300'/>
          </div> <br />
          Do you live with any family members now? <br />
          Checkbox and a text box with a number beside it--or just a label and text box
          Do you have any family members who are living outside of the United States now?
          *Numbers next to types <br />
          Which of the following best describes your current living situation? <br />
          <label>
            <input type="text" name="Date Left" />
          </label>
          <div className="centered-dropdown">
            Client is living:
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['In his/her own house/apt','In someone elses house/apt','In a hotel', 'Homeless', 'ICE(Immigrant detention']}
              width='300'/>
          </div>
          If living in someone else's house/apartment, do you pay rent?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form> <br />
          <div className="centered-dropdown">
            In what county do you live? <br />
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Los Angeles','Orange','Riverside', 'San Bernardino', 'Ventura', 'Other']}
              width='300'/>
          </div>
          Do you consider your housing and neighborhood safe?
          <form>
            <input type="radio" name="safe" value="yes" />Yes
            <input type="radio" name="safe" value="no" />No <br />
            If no, please specify:
          </form>
          <label>
            <input type="text" name="Safety" />
          </label> <br />
          <div className="centered-dropdown">
            In general, how would you describe your ability to speak English?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Very good','Good','Fair', 'Poor', 'None']}
              width='300'/>
          </div>
          <div className="centered-dropdown">
            In general, how would you describe your ability to comprehend or understand English?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Very good','Good','Fair', 'Poor', 'None']}
              width='300'/>
          </div>
          <div className="centered-dropdown">
            In general, how would you describe your ability to read English?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Very good','Good','Fair', 'Poor', 'None']}
              width='300'/>
          </div>
          <div className="centered-dropdown">
            In general, how would you describe your ability to write English?
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Very good','Good','Fair', 'Poor', 'None']}
              width='300'/>
          </div>
          How did you learn English?
          *Need checkboxes for multiple selections <br />
          What is/are your native languages? <br />
          <label>
            <input type="text"/>
            </label> <br />
          <label>
            <input type="text" />
          </label> <br />
          <label>
            <input type="text" />
          </label> <br />
          Can you read in one of your native languages? <br />
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form> <br />
          Can you write in one of your native languages? <br />
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form> <br />
          What is your current work status? <br />
          ORR Codes for STATUS @ Intake
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['No work authorization','Unemployed, work authorized, and not seeking','Unemployed, work authorized, and seeking', '4. Employed (FT/PT) with work authorization', 'Unable to work (due to current physical or mental disability or condition', 'Student', 'Primary caregiver not employed outside the house', 'Other', 'Missing/Unknown']}
              width='300'/>
          </div>
          Regular Categories:
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Full-time','Part-time, More than one part-time job','Unemployed, Homemaker', '4. In-kind work', 'Retired', 'Permanently Disabled', 'Current work impairment', 'Dont know', 'Refused', 'Student', 'Other']}
              width='300'/>
          </div>
          What was your primary occupation in your native country? <br />
          <label>
          REFER TO CODEBOOK <input type="text" name="occupation" />
          </label> <br /> <br />
          What is your current occupation? <br />
          <label>
          REFER TO CODEBOOK <input type="text" name="currentOcc" />
          </label> <br /> <br />
          Are you currently involved in any community activities or volunteer services (i.e., sports team, religious organization, caregiving, volunteer work)?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form> <br />
          <h1> Physical Needs</h1>
          How would your rate your physical health?
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Excellent','Very Good','Good', 'Fair', 'Poor']}
              width='300'/>
          </div>
          If you could rate your physical health on a scale from 1 to 10, with 1 being very poor physical health and 10 being the very best physical health, how would you rate your physical health?
          *Need checkboxes HERE
          Is physical pain currently a problem for you?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br /> <br />
          During the past 4 weeks, has your physical health limited the kind of work or other activities that you did?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br />
          Do you have any permanent physical, injuries or scars as a result of the persecution you experienced?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br />
          Do you have any permanent physical injuries or scars as a result of something other than the persecution you experienced, such as an accident or surgery?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br />
          Have you ever experienced a loss of consciousness due to injuries to the head?
          <form>
            <input type="radio" name="head" value="yes" />Yes
            <input type="radio" name="head" value="no" />No
          </form>
          Do you currently have any medical conditions or problems?
          <form>
            <input type="radio" name="med" value="yes" />Yes
            <input type="radio" name="med" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br />
          Are you currently receiving any medical treatment?
          <form>
            <input type="radio" name="treatment" value="yes" />Yes
            <input type="radio" name="treatment" value="no" />No
          </form>
          If yes, then who provides this treatment? If no, then ask the next question.
          *Need checkboxes
          Do you currently have health insurance?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please describe:
          <label>
          <input type="text" name="Description" size="80"/>
              </label> <br />
          Are you currently taking any medications?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please specify medications and dosages:
          <label>
            <input type="text" name="Description" size="80"/>
          </label> <br />
          During the past 12 mos., how many visits did you have with a health professional in office/ clinic, not counting overnight stays in a hospital? <br />
          <label>
          Number of Visits: <input type="text" name="currentOcc" />
          </label> <br /> <br />
          Over the past 12 mos., did you want medical care you felt was necessary (e.g., seeing a doctor) but were unable to do so or had to delay it? If yes, please specify:
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please specify:
          <label>
            <input type="text" name="Description" size="80"/>
          </label> <br />
          During the past four weeks, have you used any other treatments, such as herbal medications, traditional remedies, acupuncture, or chiropractic care?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, please specify:
          <label>
            <input type="text" name="Description" size="80"/>
          </label> <br />
          In the past 12 mos., were you a patient in a hospital overnight or longer?
          <form>
            <input type="radio" name="hosp" value="yes" />Yes
            <input type="radio" name="hosp" value="no" />No
          </form> <br />
          In the past 12 mos. how many dental visits did you have? <br />
          <label>
          Number of Visits: <input type="text" name="currentOcc" />
          </label> <br /> <br />
          During the past 12 months, did you want or need dental care but were not able to or had to delay it?
          <form>
            <input type="radio" name="hosp" value="yes" />Yes
            <input type="radio" name="hosp" value="no" />No
          </form> <br />
          If yes, please list reasons:
          <label>
            <input type="text" name="Description" size="80"/>
          </label> <br />
          Do you smoke cigarettes currently?
          <form>
            <input type="radio" name="cigs" value="yes" />Yes
            <input type="radio" name="cigs" value="no" />No
          </form> <br />
          Have you ever smoked cigarettes?
          <form>
            <input type="radio" name="cigs" value="yes" />Yes
            <input type="radio" name="cigs" value="no" />No
          </form> <br />
          Do you currently drink alcohol?
          <form>
            <input type="radio" name="cigs" value="yes" />Yes
            <input type="radio" name="cigs" value="no" />No
          </form> <br />
          Have you ever drunk alcohol?
          <form>
            <input type="radio" name="cigs" value="yes" />Yes
            <input type="radio" name="cigs" value="no" />No
          </form> <br />
          Are you currently pregnant?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          If yes, how many months:
          <label>
            <input type="text" name="Description" size="10"/>
          </label> <br />
          Are you currently receiving pre-natal care?
          <form>
            <input type="radio" name="rent" value="yes" />Yes
            <input type="radio" name="rent" value="no" />No
          </form>
          <h1>Primary Complaint/Presenting Problem </h1>
          Select one of the following choices: 
          <form>
          <div className="center-aligned">
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="psy/env" />Psychiatric/Psychological Problems <br />
          <div className="right-checkbox">
            Signs or symptoms of conditions such as psychosis, depression, acute anxiety, post-traumatic stress disorder, etc. <br />
          </div>
         </div>
         <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="psy/env" />Psychosocial and Environmental Problems <br />
         <div className="center-aligned"> 
              a. Problems w/community, family, or social support (e.g., family separation; other personal relationship problems) <br />
              b. Educational and/or language problems (e.g., illiteracy, ESL) <br />
              c. Occupational problems (e.g., unemployment, no work authorization) <br />
              d. Housing problems (e.g. homelessness, unsafe neighborhood) <br />
              e. Economic problems (e.g., lack of financial resources to meet basic human needs) <br />
              f. Access to health care problems (e.g. healthcare not available) <br />
              g. Problems with childcare <br />
              h. Other – NOS (e.g. discord with other providers/unavailability of social service agencies) <br />
           <br />
           </div>
          <div>
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="health" />Health or Medical Problems <br />
            a. Acute (client required or requested immediate referral to a hospital/ medical care provider) <br />
            b. Non-Acute (Chief complaint is medical/health-related, did not require immediate eval or tx referral <br />
          </div>
          <div>
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="legal" />Legal Problems <br />
          Unavailability of legal counsel, assistance w/asylum application, needs expert testimony, etc
          </div> <br />
          <div>
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="legal" />Other
          </div>
          </form>
          
          <h3>Working Diagnosis:</h3>
          Axis I: <br />
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />MDD
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />PTSD
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />MDD and PTSD
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />MDD and Other
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />PTSD and Other
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />MDD, PTSD, and Other
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />Other
            <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />Missing/Unknown <br />
          If you chose other, specify DX:
          <label>
            <input type="text" name="Description" size="100"/>
          </label> <br />
          
          Origin of Dx:
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />Clinician Interview
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />Diagnostic Scale
          <input onChange={this.handleFruitChange} type="checkbox" name="problem" value="dx" />Other Program dx <br />
          What brings you to PTV, and how do you hope we can help you? [Write what client says] <br />
          <label>
            <textarea rows="10" cols="80"></textarea>
          </label> <br />
          <h1>Emotional Health Needs </h1>
          In general, you would say that your emotional well-being is:
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Excellent','Very Good','Good', 'Fair', 'Poor']}
              width='300'/>
          </div>
          If you could rate your emotional well-being on a scale from 1 to 10, with 1 being very poor emotional well-being and 10 being the very best emotional well-being, how would you rate your emotional well-being? <br />
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />1
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />2
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />3
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />4
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />5
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />6
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />7
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />8
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />9
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />10
          During the past 4 weeks, did you have difficulty doing your work or other activities as well as usual because of emotional problems such as feeling depressed or anxious? <br />
          <form>
            <input type="radio" name="emo" value="yes" />Yes
            <input type="radio" name="emo" value="no" />No <br />
            If yes, please specify:
            <label>
              <input type="text" name="Description" size="80"/>
            </label> <br />
          </form> <br />
          In the past 12 months, have you spoken with any professional other than PTV staff about your feelings? (For example, a professional like the people who work in our office: a psychiatrist, psychologist, psychiatric social worker, psychiatric nurse, or marriage or family counselor?) <br />
          <form>
            <input type="radio" name="emo" value="yes" />Yes
            <input type="radio" name="emo" value="no" />No
            If no, skip next 2 questions.
          </form>
          During the past 12 mos. how many visits did you make to a professional for emotional problems? <br />
          <label>
            # of visits: <input type="text" name="Description" size="20"/>
          </label> <br />
          From whom did you receive treatment or counseling for an emotional, personal, or family problem? <br />
          Check all that apply:
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />Mental Health Professional
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />Minister/Priest
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />Traditional/spiritual healer
          <input onChange={this.handleFruitChange} type="checkbox" name="rating" value="emo" />Other <br />
          If applicable, please specify providers:
          <label>
            <input type="text" name="Description" size="100"/>
          </label> <br /> <br /> <br />
          During the past 12 months, did you want to talk to a professional about a psychological or emotional health problem (such as seeing a psychologist, psychiatrist, counselor, or therapist), but were unable to or had to delay it?
          <form>
            <input type="radio" name="emo" value="yes" />Yes
            <input type="radio" name="emo" value="no" />No <br />
            If yes, please list reasons:
            <label>
              <input type="text" name="Description" size="80"/>
            </label> <br />
          </form> <br />
          <h3>What are some of the things you do to make yourself feel better now, or when you were experiencing difficulty in your country?</h3>
          Religious belief/spirituality <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Seeking support from family/friends <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Political beliefs or commitment to a cause <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Will to survive <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Luck/chance/fate <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Anger/desire for revenge <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Humor/irony <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Emotional distancing/numbing <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Fantasy/escapism <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Dissociation <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Cooperation with torturers <br />
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Deception of torturers (tricks, mind games)<br />
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Support from other prisoners/ victims <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Activities/physical exercise <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Avoidance of trauma reminders <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Listening to music <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Art <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Prescribed medication <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Alcohol or other drugs <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Internet Usage <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          Gambling <br />
          <input type="radio" name="emo" value="rel" />Currently
          <input type="radio" name="emo" value="rel" />In Home Country <br />
          <h3>Hopkins Symptom Checklist</h3>
          I am going to read you a list of symptoms or problems that people sometimes have. Please listen carefully as I read each one and decide how much the symptoms bothered or distressed you in the last week, including today. [PLEASE SHOW THE CLIENT THE CUE CARD MARKED “HSCL-25” AS YOU POINT TO AND ILLUSTRATE EACH POSSIBLE RESPONSE CATEGORY.] Was it, “Not at all,” “A little bit,” “Quite a bit,” or “Extremely”?
          <h2>Part I: Anxiety</h2>
          How much did the following symptoms bother you in the past week? <br />
          Suddenly scared for no reason <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling fearful <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Faintness, dizziness, or weakness <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Nervousness or shakiness inside
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Heart pounding or racing <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Trembling <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling tense or keyed up
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Headaches <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Spells of terror or panic <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling restless, can’t sit still <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          <h2>Part II: Depression</h2>
          How much did the following symptoms bother you in the past week? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Blaming yourself for things <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Crying easily <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Loss of sexual interest or pleasure <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Poor appetite <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Difficulty falling asleep, staying asleep <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling hopeless about the future <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling blue <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling lonely <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Thoughts of ending your life <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling of being trapped or caught <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Worrying too much about things <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling no interest in things <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          Feeling everything is an effort <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Quite a Bit', '4-Extremely']}
              width='300'/>
          </div> <br />
          <label>
          Depression Score = Items 63-77 / 15 = 
              <input type="text" name="Score " />
            </label>
            <label> <br />
            Total Score = Items 53-77 / 25 = 
              <input type="text" name="Score " />
            </label> <br />
          Individuals with scores on anxiety and/or depression and/or total > 1.75 are considered symptomatic. See HSCL-25 Manual for additional information
          <h2>PTSD Checklist<br />
          National Center for PTSD</h2>
          I am going to read a list of problems and complaints people sometimes have after being tortured or
          experiencing other hurtful or terrifying events. As I read each one, please tell me how much you’ve been bothered by these things in the past month. [PLEASE SHOW THE CLIENT THE CUE CARD MARKED “CHECKLIST” AS YOU POINT TO AND ILLUSTRATE EACH POSSIBLE RESPONSE CATEGORY.] Was it, “Not at all,” “A little bit,” “Moderately,” “Quite a bit,” or “Extremely”?
          <h4>In the past month, how much have you been bothered by _________?</h4>
          Feeling emotionally numb or being unable to have loving feelings for those close to you? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Feeling as if your future somehow will be cut short? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Trouble falling or staying asleep? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Feeling irritable or having angry outbursts? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Having difficulty concentrating? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Being “super alert” or watchful or on guard? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Feeling jumpy or easily startled? <br />
          <div className="centered-dropdown">
            <ReactSingleDropdown
              defaultSelected = 'Choose from the following'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['1- Not at All','2-A Little Bit','3-Moderately','4-Quite a Bit', '5-Extremely']}
              width='300'/>
          </div> <br />
          Responses are summed to generate the following scores:
          <label> <br />
          Total PTSD Symptom Severity Score = ITEMS 78-94 =
              <input type="text" name="Score " />
            </label> <br /> <br />
          Individuals with scores > 50 (possible scores = 17-85) merit a PTSD diagnosis.
          Subscale scores for each of 3 symptom clusters = individual is classified as having PTSD if
          they report having been at least moderately bothered by
          1 or more re-experiencing symptoms (items 78-82), 3 or more avoidance symptoms (items 83-89), and 2 or more arousal symptoms (items 90-94) over the last month. <br />
        <h2>Case Management Needs Assessment</h2>
        (NOTE: Not a structured interview – to be used as an interview guide. Preface the conversation with something like: “PTV tries to understand client’s practical needs and tries to help them find solutions. We often help clients learn how to find bus routes, connect them with ESL or other classes, and help them see where to look online for jobs, housing, services, or other needs. While we wish we could provide more help, we are a small agency and our resources are very limited.” <br />
        What is your means of financial support? <br />
        <form>
            <input type="radio" name="fin" value="self" />Self
            <input type="radio" name="fin" value="fri" />Friends/Relatives
            <input type="radio" name="fin" value="ssi" />SSI/SSDI
            <input type="radio" name="fin" value="comp" />Worker's Compensation
            <input type="radio" name="fin" value="tanf" />TANF
            <input type="radio" name="fin" value="ga" />General Assistance
            <input type="radio" name="fin" value="asy" />Asylum/Refugee Benefits
            <input type="radio" name="fin" value="no" />No Means of Financial Support 
            <input type="radio" name="fin" value="other" />Other
          </form> <br />
          Do you have an Employment Authorization Document (work permit)? <br />
          <input type="radio" name="fin" value="yes" />Yes
          <input type="radio" name="fin" value="no" />No <br />
          Do you send financial support back to others in your country? <br />
          <input type="radio" name="fin" value="yes" />Yes
          <input type="radio" name="fin" value="no" />No <br /> <br />
          Daily living needs: How do you meet your daily living needs? Are there needs you have, that you are not able to meet? <br />
          <input type="radio" name="need" value="food" />Food
          <input type="radio" name="fin" value="clo" />Clothing
          <input type="radio" name="fin" value="hou" />Housing
          <input type="radio" name="fin" value="hou" />Household Goods
          <input type="radio" name="fin" value="trans" />Transportation (bus system, financial, public transportation) <br /> <br />
          Physical functioning needs: Do you need any of the following? <br />
          <input type="radio" name="need" value="needs" />Wheelchair/cane
          <input type="radio" name="need" value="needs" />Vision exam or glasses
          <input type="radio" name="need" value="needs" />Dental Exam or services
          <input type="radio" name="need" value="needs" />Hearing Exam or aid
          <input type="radio" name="need" value="needs" />Speech eval/therapy
          <input type="radio" name="need" value="needs" />Assistance attending medical appointments
          <input type="radio" name="need" value="needs" />Other <br /> <br />
          Legal advocacy: Do you have any of the following legal needs? <br />
          <input type="radio" name="need" value="needs" />Asylum Matters
          <input type="radio" name="need" value="needs" />Residence/Citizenship
          <input type="radio" name="need" value="needs" />Family Reunification
          <input type="radio" name="need" value="needs" />Criminal Proceedings
          <input type="radio" name="need" value="needs" />Other <br /> <br />
          Educational and Vocational Needs: (If and when you are eligible), do you have an interest in pursuing further education or vocational services? <br />
          <input type="radio" name="need" value="needs" />Job Placement 
          <input type="radio" name="need" value="needs" />Job counseling
          <input type="radio" name="need" value="needs" />Job Training
          <input type="radio" name="need" value="needs" />Career/educational counseling
          <input type="radio" name="need" value="needs" />Career/educational Placement
          <input type="radio" name="need" value="needs" />Other <br /> <br />
          Social Support System Needs: Do you need any of the following social support services? <br />
          <input type="radio" name="need" value="needs" />Links to family members
          <input type="radio" name="need" value="needs" />Links to social communities/groups
          <input type="radio" name="need" value="needs" />Links to ethnic organizations
          <input type="radio" name="need" value="needs" />Other <br /> <br />
          Language needs: Do you need any of the following language support services? <br />
          <input type="radio" name="need" value="needs" />Interpreter/translations
          <input type="radio" name="need" value="needs" />ESL classes
          <input type="radio" name="need" value="needs" />Other <br /> <br />
          Are you currently enrolled in ESL classes? <br />
          <input type="radio" name="need" value="esl" />Yes
          <input type="radio" name="need" value="esl" />No <br /> <br />
          OTHER SPECIAL NEEDS (Notes): <br />
          <label>
            <textarea rows="10" cols="80"></textarea>
          </label> <br />
      </div>
    );
  }
}

export default IntakeForm;
