import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsAdapter from '@material-ui/lab/dateAdapter/date-fns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateRangeDelimiter from '@material-ui/lab/DateRangeDelimiter';
import MobileDateRangePicker, {
  DateRange,
} from '@material-ui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@material-ui/lab/DesktopDateRangePicker';

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <MobileDateRangePicker
        startText="Mobile start"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="standard" />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} variant="standard" />
          </React.Fragment>
        )}
      />
      <DesktopDateRangePicker
        startText="Desktop start"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} variant="standard" />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} variant="standard" />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
