import { fonts, colors } from './theme';

const baseHeader = {
  headerBackTitle: null,

  headerStyle: {
    backgroundColor: colors.PURPLE,
  },
  headerTintColor: colors.WHITE,
  headerTitleStyle: {
    fontFamily: fonts.MEDIUM,
    fontSize: 20,
  },
};

export const noHeader = {
  header: null,
  headerBackTitle: null,
};

export default baseHeader;
