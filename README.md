# Health360: Comprehensive Healthcare Risk & Disease Analysis

## Project Deliverables
* **Live Interactive Dashboard & Story:** [Tableau Public View](https://public.tableau.com/views/Health360HealthcareRisk/Health360ExecutiveDashboard)
* **Dataset Used:** `smart_healthcare_dataset.csv`

---

## Step-by-Step Project Development Procedure

### 1. Data Collection & Extraction
* Loaded the raw `smart_healthcare_dataset.csv` into Tableau Public.
* Verified schema integrity, row count, and field associations.

### 2. Data Preparation
* Formatted categorical variables (`Smoking`, `Exercise Level`, `Heart Disease`, `Diabetes`) into discrete dimensions.
* Applied continuous scaling and aggregation metrics (`AVG`) for key health indicators like Blood Pressure and Glucose levels.

### 3. Visualizations Created
* **Clinical Risk Analysis:** Evaluated clinical risk thresholds by mapping Blood Pressure against Glucose levels using a scatter distribution.
* **Lifestyle Risk Heatmap:** Correlated heart disease risk density across lifestyle variables (Smoking habits vs Exercise intensity).
* **Demographic Disease Risk:** Visualized age-cohort disease distribution (Diabetes & Cardiac risks).

### 4. Executive Dashboard & Story
* Assembled all analytical views into the `Health360 Executive Dashboard` with responsive layout and clear KPI legends.
* Sequenced key insights into a 4-scene narrative Story covering clinical risk, lifestyle patterns, demographic impact, and the executive summary.

### 5. Performance Testing & Deployment
* Validated rendering performance across web views and interactive cross-filters.
* Published directly to Tableau Public cloud and archived repository assets on GitHub.


---

## Business Logic & Transformations (Code & Formulas)
Instead of traditional procedural scripting, BI transformations and calculation logic were built into the data model:
* **Measures Aggregation:** Applied analytical aggregation for clinical indicators:
  * `AVG([Blood Pressure])`
  * `AVG([Glucose])`
  * `AVG([Heart Disease])`
* **Discrete Attributes:** Mapped categorical variables into distinct visual dimensions:
  * `Smoking (0 = Non-Smoker, 1 = Smoker)`
  * `Exercise Level (0 = Low, 1 = Moderate/High)`
  * `Diabetes (0 = Negative, 1 = Positive)`

---

## Key Findings & Results
* **Clinical Correlation:** Patients exhibiting higher blood glucose levels demonstrated an associated rise in systolic blood pressure trends.
* **Lifestyle Risk Matrix:** The Heatmap visual confirms that smoking paired with low physical activity directly correlates with elevated cardiac risks.
* **Demographic Patterns:** Cardiac and diabetes markers show sharp increments in cohorts over 45 years of age.

---

## References
* **Dataset:** Clinical and Lifestyle Parameters Dataset (`smart_healthcare_dataset.csv`)
* **Analytics & BI Engine:** Tableau Public Web Authoring
* **Documentation Framework:** Healthcare Risk Exploratory Data Analysis Standards
*
