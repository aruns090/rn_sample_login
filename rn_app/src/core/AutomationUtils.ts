import {AccessibilityProps, Platform} from 'react-native';

export interface ITestProps extends AccessibilityProps {
  testID?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
}

export class AutomationUtils {
  public static testProps(id: string): ITestProps {
    return Platform.OS === 'ios'
      ? {testID: id}
      : {accessibilityLabel: id, accessible: true};
  }
}
