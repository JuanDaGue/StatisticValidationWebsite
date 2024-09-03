# Validation of the 21 cm Cosmological Signal Model Reported by the EDGES Radio Telescope

## Overview

This project focuses on the statistical validation of the 21 cm cosmological signal model reported by the EDGES (Experiment to Detect the Global Epoch of Reionization Signature) radio telescope. The signal is believed to originate from the early universe during the epoch of reionization. The primary objective of this project is to verify the authenticity and reliability of the signal by applying various statistical methods and models.

## Project Structure

- **data/**: Contains raw data files, cleaned data, and any intermediate files produced during analysis.
- **notebooks/**: Jupyter notebooks detailing the steps taken in data cleaning, analysis, and model validation.
- **src/**: Source code for the project, including scripts for data processing, model training, and statistical analysis.
- **results/**: Output files, including graphs, tables, and other visualizations of the analysis results.
- **docs/**: Documentation related to the project, including this README file and any additional project reports.
- **tests/**: Unit tests and other validation scripts to ensure the correctness of the implemented methods.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/JuanDaGue/Validaci-n-Estad-stica-del-modelo-de-la-se-al-cosmologica-de-21-cm
    cd edges-validation
    ```

2. Set up a virtual environment (optional but recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. **Data Preprocessing**:
   - Use the scripts in the `src/` directory to preprocess the raw data found in the `data/` directory.
   - Example:
     ```bash
     python src/preprocess_data.py
     ```

2. **Model Validation**:
   - Run the statistical analysis and validation models found in the `notebooks/` directory or as standalone scripts in `src/`.
   - Example:
     ```bash
     python src/run_validation.py
     ```

3. **Results**:
   - The output will be stored in the `results/` directory, including visualizations and statistical summaries.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of the feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any inquiries or further information, please contact:

- **Name**: Juan David Guerrero
- **Email**: david.guerrero@udea.edu.co
- **LinkedIn**: [Juan David Guerrero](https://www.linkedin.com/in/juan-david-guerrero-uchima-b94ab3226/)

---

**Note**: Replace any placeholders (e.g., `yourusername`, `juandavid@example.com`) with the actual details specific to your project.

