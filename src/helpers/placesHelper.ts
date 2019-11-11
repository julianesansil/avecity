export function getCityAndCountry(data: any) {
  if (data.structured_formatting) {
    return {
      cityName: data.structured_formatting.main_text,
      countryName: data.structured_formatting.secondary_text
        .split(',')
        .pop()
        .trimLeft(),
    };
  } else {
    const cityName =
      data &&
      data._dispatchInstances &&
      data._dispatchInstances.memoizedProps &&
      data._dispatchInstances.memoizedProps.text;

    return (
      cityName && {
        cityName,
        countryName: undefined,
      }
    );
  }
}

export function getLocationAndAddress(data: any) {
  if (data.structured_formatting) {
    return {
      locationName: data.structured_formatting.main_text,
      address: data.structured_formatting.secondary_text
        .split(', ')
        .shift()
        .trimLeft(),
    };
  } else {
    const locationName =
      data &&
      data._dispatchInstances &&
      data._dispatchInstances.memoizedProps &&
      data._dispatchInstances.memoizedProps.text;

    return (
      locationName && {
        locationName,
        address: undefined,
      }
    );
  }
}
