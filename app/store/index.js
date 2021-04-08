export const state = () => ({
  form: {
    user: {},
    type: '',
    school: '',
    career: '',
    nameCareers: [],
    results: [],
    location: '',
  },
})

export const mutations = {
  setUser(state, user) {
    state.form.user = user
  },
  setType(state, type) {
    state.form.type = type
  },
  setSchool(state, school) {
    state.form.school = school
  },
  setCareer(state, career) {
    state.form.career = career
  },
  setNameCareers(state, nameCareers) {
    state.form.nameCareers = nameCareers
  },
  setResults(state, results) {
    state.form.results = results
  },
  setLocation(state, location) {
    state.form.location = location
  },
}
