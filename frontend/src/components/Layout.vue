<template>
  <Split style="height: 600px;" :direction="vertical">
    <SplitArea :size="15" :minSize="200">
      panel left
    </SplitArea>
    <SplitArea :size="80" :minSize="600">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-tabs>
              <b-tab title="Dashboard" active>
                <b-carousel id="carousel1"
                            style="text-shadow: 1px 1px 2px #333;"
                            controls
                            indicators
                            background="#ababab"
                            :interval="4000"
                            img-width="1024"
                            img-height="480"
                            v-model="slide"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                >

                  <b-carousel-slide caption="First slide"
                                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                    img-src="https://picsum.photos/1024/480/?image=52"
                  ></b-carousel-slide>

                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                  </b-carousel-slide>

                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                  </b-carousel-slide>

                  <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                         src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                  </b-carousel-slide>

                  <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                      ut lacus vel interdum.
                    </p>
                  </b-carousel-slide>
                </b-carousel>
              </b-tab>
              <b-tab title="Properties" >
                <br>Properties tab!
              </b-tab>
              <b-tab title="SQL">
                <br>SQL tab!
              </b-tab>
              <b-tab title="Statics">
                <br>Statics tab!
              </b-tab>
              <b-tab title="Dependencies">
                <br>Dependencies tab!
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </SplitArea>
  </Split>
</template>

<script>

</script>

<style>

</style>
