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
*
