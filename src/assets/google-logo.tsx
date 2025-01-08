const GoogleLogo = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect
        x='2'
        y='2'
        width='20'
        height='20'
        fill='url(#pattern0_12749_355759)'
      />
      <defs>
        <pattern
          id='pattern0_12749_355759'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_12749_355759' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_12749_355759'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,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DIi8HwEx+NGdmPA+nOQwnGQPi0FJfqhO+yLHP2PLmntG9XiHjHIHU4H1OuyK6NVCiyc/EMCQLNlArPzfSJS+0un7Yy/1a9VpvcuNla9JDnq9V61nnD07tnoGarMnNgCV2FLAAwACTgy/aBuCg9MxHsHjU5VkDqsbW3R40uKn3Y5JrPvupb1qNWMC9izfypjq6YDUAW9g19YTCy2e/EBA4iSL3kPDtTiJkTj+UMBvUSd+v1+07dFIwwKz7u7eh4+zMqSpPcLAfI2V+Dgd44kevL3R7Zj0935k18NiBiVfuvvsjJrJKn889eft2Ldq1GAP6A0MqIsJf7y/veyxO7224UuReMbCh4CWkqmZMBRbifxbDIwjSu8C/yjIM4pqXzP/AlvLp0gIAVXYtyxlX/6mf8LH5qIuVnjPkeychYFupipqqvAVXGEG8ENsOsqpdEymDfuG7fuAhiDyXXOym03NhhHYhKwvYjdtJ/POOYHd9zwGPAu0BZVsnDOhzK6pwhFBVcdjX3H7VU7OV5rvx77SfCnQEDKG129/NrDGcz4qU7MhgnVl3wEsxCZq9Xccxr5YYqkibwmYXBw0yYtamLbuTkr37gUbfrwaGxC5HPuOmv6kmgywE1ti/xmU1UB80xdyF6POe+craqoQcNUGSm4BbsZu5sL5fpZOaMcWmXoaqAH9CMTk6lBJZxRs9FnVJAJaDlwCXIedFaMJtnpXd0gAnwDrsIb1NWyAp89r+r6gX0z/lJ3wsJUbZ6c+47CzZCz2rdXZzJA40Ajswr6J72OsW/0tgU9USOYrFeZY9AsCjkXFsipQXGz8dgIwHbuxmwKMx4ZFh2BtShi710imPq1YA3oAe/R2O1bo7wE7EBpB/U23rih0NwH4f4ZwhoM+nwScAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTExLTI4VDEzOjMyOjAxKzAwOjAwApPiVAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMS0yOFQxMzozMjowMSswMDowMHPOWugAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANTEyj41TgQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MDY1NzAzMjHEReu3AAAAE3RFWHRUaHVtYjo6U2l6ZQAyMDc3NkJCD4vmbQAAAEd0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2L0JPRENKOXEvMjY5OS9nb29nbGVfbG9nb19pY29uXzE2OTA5MC5wbmewiNWgAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
};

export default GoogleLogo;
