import { Bar } from './Bar'
// import { Bar } from './Bar'
import './page.css'

export default {
  title: 'Example/Bar',
  component: Bar,

}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicBar = {
  args: {
    primary: false
  },
};