# [BOJ] 10250. ACM 호탤

T = int(input())    # 테스트 케이스 수
for _ in range(T):  # 테스트 케이스 수만큼 반복
    H, W, N = map(int, input().split())
    # H: 호텔의 층 수 / W: 각 층의 방 수 / N: 몇 번째 손님인지
    # 방 번호 : YXX or YYXX
    X = N // H + 1  # 엘리베이터에서부터 세었을 때 번호
    if N % H == 0:  # 이 경우를 따로 생각하지 않아서 계속 틀렸다. 꼭대기 층인 경우다.
        X -= 1
        Y = H
    else:
        Y = N % H
    print(Y*100 + X)
