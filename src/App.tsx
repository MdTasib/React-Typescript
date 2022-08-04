import BuiltInPropsTypes from './components/built-in-props-types/BuiltInPropsTypes';
import Counter from './components/Counter';
import FormEvents from './components/events/FormEvents';
import TypeingEvent from './components/events/TypeingEvent';
import UseReducer from './components/hooks/useReducer/UseReducer';
import UseState from './components/hooks/useState/UseState';
import TypeingChildrenProps from './components/typing-children-props/TypeingChildrenProps';
import TypeingStyleProps from './components/typing-style-props/TypeingStyleProps';
import UserDefinedPropsTypes from './components/user-defined-Props-types/UserDefinedPropsTypes';


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <BuiltInPropsTypes/> */}
      {/* <UserDefinedPropsTypes/> */}
      {/* <TypeingChildrenProps/> */}
      {/* <TypeingStyleProps/> */}
      {/* <UseState/> */}
      <UseReducer/>
      {/* <TypeingEvent/> */}
      {/* <FormEvents/> */}
    </div>
  );
}

export default App;
