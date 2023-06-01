
import './App.css'

const ListaItem = (props: any) => {
  return (
  <div className="todo-item">
    <div className="checker">
      <span><input type="checkbox" /></span>
    </div>
    <span>{props.titulo}</span>
    <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close" /></a>
  </div>
  )
}

const LiItem = (props: any) => {
  return (
    <li
    role="presentation"
    className="nav-item all-task active">
    <a href="#" className="nav-link">{props.titulo}</a>
  </li>
  )
}


function App() {
  return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">
							<form action="javascript:void(0);">
								<input
									type="text"
									className="form-control add-task"
									placeholder="New Task..."
								/>
							</form>
              <ul className="nav nav-pills todo-nav">
                  <LiItem titulo={'All'}/>
                  <LiItem titulo={'Active'}/>
                  <LiItem titulo={'Completed'}/>
							</ul>

              <div className="todo-list">
                  <ListaItem titulo={'Create theme'} />
                  <ListaItem titulo={'Work on wordpress'} />
                  <ListaItem titulo={'Organize office main department'} />
                  <ListaItem titulo={'Error solve in HTML template'} />
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default App
