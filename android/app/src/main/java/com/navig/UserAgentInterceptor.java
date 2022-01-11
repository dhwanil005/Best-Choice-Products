package com.navig; // <-- REPLACE ME

import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

public class UserAgentInterceptor implements Interceptor {

  public UserAgentInterceptor() {}

  @Override
  public Response intercept(Interceptor.Chain chain) throws IOException {
    Request originalRequest = chain.request();
    Request requestWithUserAgent = originalRequest.newBuilder()
      .removeHeader("User-Agent")
      .addHeader("User-Agent", "YOUR USER AGENT") // <-- REPLACE ME
      .build();

    return chain.proceed(requestWithUserAgent);
  }

}