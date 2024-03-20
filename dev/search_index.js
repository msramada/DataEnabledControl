var documenterSearchIndex = {"docs":
[{"location":"theory/#Background:-data-driven-control","page":"Theory","title":"Background: data-driven control","text":"","category":"section"},{"location":"theory/","page":"Theory","title":"Theory","text":"This package is based on the paper Data-Enabled Predictive Control: In the Shallows of the DeePC, which is a behavioral data-driven approach. For more context, the interested reader may consult A note on persistency of excitation.","category":"page"},{"location":"theory/","page":"Theory","title":"Theory","text":"Note: our package, for now, considers only the regulation problem, that is, tracking the trajectory y=r=0.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DataEnabledControl","category":"page"},{"location":"#DataEnabledControl","page":"Home","title":"DataEnabledControl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for DataEnabledControl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Install","page":"Home","title":"Install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"In the Julia REPL package mode:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add DataEnabledControl","category":"page"},{"location":"#Quick-start","page":"Home","title":"Quick start","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For a quick start please check example.ipynb notebook under docs.","category":"page"},{"location":"#Functions-and-Types","page":"Home","title":"Functions and Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [DataEnabledControl]","category":"page"},{"location":"#DataEnabledControl.DataEnabledControl","page":"Home","title":"DataEnabledControl.DataEnabledControl","text":"DataEnabledControl.jl is a Julia package implementing the DeePC algorithm in the paper  \"Coulson, J., Lygeros, J., & Dörfler, F. (2019, June). Data-enabled predictive control:  In the shallows of the DeePC. In 2019 18th European Control Conference (ECC) (pp. 307-312). IEEE.\"\n\n\n\n\n\n","category":"module"},{"location":"#DataEnabledControl.ConstraintMatrices","page":"Home","title":"DataEnabledControl.ConstraintMatrices","text":"ConstraintMatrices\n\nStores the constraint matrices representing polyhedron constraints of the form: Ay * y <= by and Au * u <= bu.\n\n\n\n\n\n","category":"type"},{"location":"#DataEnabledControl.DeePC_struct","page":"Home","title":"DataEnabledControl.DeePC_struct","text":"DeePC_struct\n\nUsed to formulate the DeePC optimization problem Q:                  the weighting matrix of the output signal R:                  the weighting matrix of the input signal PastDataMatrix:     the left tall matrix [Uₚ; Yₚ] in the paper FutureInputMatrix:  Uf according to the paper FutureOutputMatrix: Yf according to the paper Constrained:        true if the system is input or output constrained constraintMatrices: params of polyhedral constraints\n\n\n\n\n\n","category":"type"},{"location":"#DataEnabledControl.build_data_matrix-Tuple{Matrix{Float64}, Matrix{Float64}, Int64, Int64}","page":"Home","title":"DataEnabledControl.build_data_matrix","text":"build_data_matrix(U::Matrix{Float64}, Y::Matrix{Float64}, Tᵢₙᵢ::Int, N::Int)\n\nTakes the data collected U,Y through a persistently excited experiment and returns the matrices [Up; Yp], Uf, Yf used in the construction of the DeePC algorithm.\n\n\n\n\n\n","category":"method"},{"location":"#DataEnabledControl.hankellize-Tuple{Matrix{Float64}, Int64}","page":"Home","title":"DataEnabledControl.hankellize","text":"hankellize(U::Matrix{Float64}, L::Int)\n\nConstructs the hankel matrix Hof a matrixU, withLnumber of shifts.Hhere corresponds toH_L(U)` in the DeePC paper.\n\n\n\n\n\n","category":"method"},{"location":"#DataEnabledControl.run_DeePC-Tuple{DeePC_struct, Vector{Float64}, Vector{Float64}}","page":"Home","title":"DataEnabledControl.run_DeePC","text":"run_DeePC(prob::DeePC_struct, Uᵢₙᵢ::Vector{Float64}, Yᵢₙᵢ::Vector{Float64}; slack_var = false, λy = 1.0, λg = 0.0)\n\nConstructs and solves the DeePC optimization problem, with a slack variable or without (noisy/nonlinear or not). It returns uₜ and yₜ, the input and output sequence solutions of the DeePC over the N-horizon. The regularization weights (the λ's) are set to zero and the slack variable is deactivated in the default settings.\n\n\n\n\n\n","category":"method"}]
}
