import React from "react";
import "./homepage.css";
class HomePage extends React.Component {
  
  render() {
    return (
      <div style={{ margin: "25px auto", maxWidth: "1024px" }}>
        <h2
          class="code-line"
          data-line-start={0}
          data-line-end={1}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a id="__Land_Cover_Classification_using_CNNSVM_model___0"></a>
          <strong>Land Cover Classification using CNN-SVM model</strong>
        </h2>
        <h2 class="code-line" data-line-start={1} data-line-end={2}>
          <a id="_Project_Description__1"></a>
          <em>Project Description:</em>
        </h2>
        <p class="has-line-data" data-line-start="2" data-line-end="3">
          In this project, the focus is to exploit multispectral remote sensing
          data by using a hybrid model based on convolutional neural networks
          and support vector machine to have land cover classification with
          improved accuracy. A system is designed that classifies the image
          using SVM based on the features extracted from the last layer of CNN.
         s This hybrid model results in greater accuracy than CNN or SVM.
        </p>
        <h2 class="code-line" data-line-start="3" data-line-end="4">
          <a id="_Approach__3"></a>
          <em>Approach:</em>
        </h2>
        <p class="has-line-data" data-line-start="4" data-line-end="5">
          The approach used in this project divided into several steps:
        </p>
        <pre>
          <code
            class="has-line-data"
            data-line-start="6"
            data-line-end="8"
            class="language-sh"
          >
            <span class="hljs-number">1</span>. Load indian pines data set
          </code>
        </pre>

        <p class="has-line-data" data-line-start="8" data-line-end="9">
          The Indian pines dataset contains 145x145 pixels with 200 bands and
          ground truth resolution of 20m. Each pixel of a band corresponds to
          the spectral characteristics of a particular area in the frequency
          range corresponding to the sensor range.
        </p>
        <pre>
          <code
            class="has-line-data"
            data-line-start="10"
            data-line-end="12"
            class="language-sh"
          >
            <span class="hljs-number">2</span>. Data pre-processing
          </code>
        </pre>
        <p class="has-line-data" data-line-start="12" data-line-end="13">
          This dataset contains a total of 16 classes. The ground truth contains
          a total of 10249 pixels. The pixels in the ground truth corresponding
          to these classes are not evenly distributed. So, we randomly select
          75% of these pixels for training purposes and the remaining 25% for
          testing these pixels on the machine learning model. These pixels are
          firstly scaled in the range from [-1, 1]. After that patches are
          created using the ground truth corresponding to each
          pixel. In this dataset bands that are
          affected by atmospheric absorption are removed. So, the training is
          done only on 200 bands of the image.
        </p>
        <pre>
          <code
            class="has-line-data"
            data-line-start="14"
            data-line-end="16"
            class="language-sh"
          >
            <span class="hljs-number">3</span>. Train CNN model
          </code>
        </pre>
        <ul>
          <li class="has-line-data" data-line-start="16" data-line-end="17">
            Building CNN model: In this step, the CNN model is built. This model
            is built because recent works prove that CNN results in a greater
            change in accuracy than SVM. In this project, CNN is used just only
            for feature extraction.
          </li>
          <li class="has-line-data" data-line-start="17" data-line-end="18">
            Training CNN model: After the Successful building of the CNN model
            its training is done on the dataset. This training is done for
            feature extraction.
          </li>
        </ul>
        <pre>
          <code
            class="has-line-data"
            data-line-start="19"
            data-line-end="21"
            class="language-sh"
          >
            <span class="hljs-number">4</span>. Feature Extraction
          </code>
        </pre>
        <p class="has-line-data" data-line-start="21" data-line-end="22">
          In this step features from the layer before fully-connected are
          extracted. This step is done because when our model trains on CNN it
          selected the best features by itself that can result in a better
          classification when passed to MLP (Multi-level Perceptron). So, the
          best features selected by CNN can also be passed to SVM rather than
          MLP.
        </p>
        <pre>
          <code
            class="has-line-data"
            data-line-start="23"
            data-line-end="25"
            class="language-sh"
          >
            <span class="hljs-number">5</span>. Train SVM model on extracted features
          </code>
        </pre>

        <p class="has-line-data" data-line-start="25" data-line-end="26">
          Features from CNN can be passed to any classifier. In this project,
          SVM is used as a classifier while CNN is used as a feature extractor.
          Based on the features from CNN, the SVM model is built and trained.
          This whole model is known as the CNN-SVM hybrid model.
        </p>
        <h4 class="code-line" data-line-start="27" data-line-end="28">
          <a id="_Report__27"></a>
          <em>Report:</em>
        </h4>
        <ol>
          <li class="has-line-data" data-line-start="28" data-line-end="29">
            Accuracy of Only SVM on test samples
          </li>
          <li class="has-line-data" data-line-start="29" data-line-end="30">
            Accuracy of Only CNN on test samples
          </li>
          <li class="has-line-data" data-line-start="30" data-line-end="31">
            Accuracy of CNN-SVM hybrid model on test samples
          </li>
          <li class="has-line-data" data-line-start="31" data-line-end="33">
            Overall Accuracy Comparison
          </li>
        </ol>
        <h2 class="code-line" data-line-start="33" data-line-end="34">
          <a id="_Technologies_used__33"></a>
          <em>Technologies used:</em>
        </h2>
        <ol>
          <li class="has-line-data" data-line-start="34" data-line-end="35">
            Python
          </li>
          <li class="has-line-data" data-line-start="35" data-line-end="36">
            Machine Learning
          </li>
          <li class="has-line-data" data-line-start="36" data-line-end="37">
            ReactJS
          </li>
          <li class="has-line-data" data-line-start="37" data-line-end="39">
            Colab
          </li>
        </ol>
        <h2 class="code-line" data-line-start="39" data-line-end="40">
          <a id="_How_to_view_UI__39"></a>
          <em>How to view UI:</em>
        </h2>
        <h2 class="code-line" data-line-start="42" data-line-end="43">
          <a id="_Contribution__42"></a>
          <em>Contribution:</em>
        </h2>
        <ol>
          <li class="has-line-data" data-line-start="43" data-line-end="44">
            Abhishek Dangayach (17EGJCS004)
          </li>
          <li class="has-line-data" data-line-start="44" data-line-end="45">
            Aman Kumar (17EGJCS016)
          </li>
        </ol>

        <h2 class="code-line" data-line-start={47} data-line-end={48}>
          <a id="_Mentor__47"></a>
          <em>Mentor:</em>
        </h2>
        <p class="has-line-data" data-line-start="49" data-line-end="50">
          This project is being created under the guidance of
        </p>
      </div>
    );
  }
}

export default HomePage;