"""LAB1 reference implementation for linear and quadratic regression."""
import numpy as np

def get_config():
    """Return the configuration selected on the public validation split."""
    return {"basis": "quadratic", "lambda": 0.0, "lr_factor": 1.0}



def make_features(X, basis):
    if basis == 'linear':
        return X.copy()
    if basis != 'quadratic':
        raise ValueError(basis)
    a, b = X[:, 0], X[:, 1]
    return np.column_stack([X, a*a, a*b, b*b])


def fit_preprocessor(F, y):
    s = F.std(axis=0, ddof=0)
    return dict(mu=F.mean(axis=0), scale=np.where(s < 1e-12, 1., s), y_mean=float(y.mean()))


def transform(F, prep):
    return (F-prep['mu'])/prep['scale']


def solve_weights(Z, yc, lam):
    n, p = Z.shape
    if lam == 0:
        return np.linalg.lstsq(Z, yc, rcond=None)[0]
    return np.linalg.solve(Z.T@Z/n+lam*np.eye(p), Z.T@yc/n)


def loss_gradient(Z, yc, w, lam):
    residual = Z@w-yc
    return (float(residual@residual/(2*len(yc)) + lam*(w@w)/2),
            Z.T@residual/len(yc)+lam*w)


def train_gd(Z, yc, lam, learning_rate, max_iter=20000, tol=1e-7):
    w = np.zeros(Z.shape[1])
    history = []
    for iteration in range(max_iter+1):
        loss, grad = loss_gradient(Z, yc, w, lam)
        norm = float(np.max(np.abs(grad)))
        history.append([iteration, loss, norm])
        if (not np.isfinite(loss) or not np.isfinite(norm) or
            loss > 1e6*max(1.,history[0][1]) or norm <= tol or iteration == max_iter):
            break
        w -= learning_rate*grad
    return w, np.asarray(history)


def evaluate(y, pred):
    residual = pred-y
    mse = float(np.mean(residual**2))
    return dict(mse=mse, rmse=float(np.sqrt(mse)), mae=float(np.mean(np.abs(residual))))
