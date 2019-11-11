import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ContactItem, {
  SCIcon,
  SCContactText,
} from '~/src/scenes/AboutApp/components/ContactItem';
import { TouchableOpacity } from 'react-native';

describe('ContactItem suit tests', () => {
  let wrapper: any;
  const onPress = jest.fn();

  beforeAll(() => {
    wrapper = renderer.create(
      <ContactItem
        nameIcon="call"
        contactText="(11) 95154-5438"
        onPress={onPress}
      />,
    );
  });

  it('renders correctly and match snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders correctly and check values', () => {
    const instanceRoot = wrapper.root;

    expect(instanceRoot.findByType(SCIcon).props.name).toEqual('call');
    expect(instanceRoot.findByType(SCContactText).props.children).toEqual(
      '(11) 95154-5438',
    );
  });

  it('renders correctly and check onpress', () => {
    const instanceRoot = wrapper.root;

    instanceRoot.findByType(TouchableOpacity).props.onPress();
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
